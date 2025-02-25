import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Stripe} from "@stripe/stripe-js"

export const createPaymentIntent = createAsyncThunk("payment/createPaymentIntent", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:3000/api/payments/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 2000, currency: "usd" }),
        })
        const data = await response.json()
        return data.clientSecret
    } catch (error) {
        return rejectWithValue("Failed to create payment intent")
    }
})
export const confirmCardPayment = createAsyncThunk(
    "payment/confirmCardPayment",
    async (
        { stripe, clientSecret, cardElement }: { stripe: Stripe; clientSecret: string; cardElement: any },
        { rejectWithValue }
    ) => {
        try {
            if (!stripe) throw new Error("Stripe instance not found")

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            })
            console.log(result)

            if (result.error) {
                throw new Error(result.error.message)
            }

            return "Payment successful!"
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : "Payment failed")
        }
    },
)

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        loading: false,
        error: null as string | null,
        clientSecret: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPaymentIntent.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createPaymentIntent.fulfilled, (state, action) => {
                state.loading = false
                state.clientSecret = action.payload
            })
            .addCase(createPaymentIntent.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(confirmCardPayment.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(confirmCardPayment.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(confirmCardPayment.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    },
})

export default paymentSlice.reducer

