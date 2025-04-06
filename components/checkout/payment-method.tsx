import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PaymentMethodProps {
  paymentMethod: "online" | "cod";
  handlePaymentChange: (method: "online" | "cod") => void;
  handleCheckout: () => void;
  isLoading: boolean;
}

export const PaymentMethod = ({
  paymentMethod,
  handlePaymentChange,
  handleCheckout,
  isLoading,
}: PaymentMethodProps) => (
  <div className="space-y-4">
    {/* <Select onValueChange={handlePaymentChange} value={paymentMethod}>
      <SelectTrigger>
        <SelectValue placeholder="Select payment method" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="online">Online Payment</SelectItem>
        <SelectItem value="cod">Cash on Delivery</SelectItem>
      </SelectContent>
    </Select> */}
    {/* <div>
      <p>By placing order you agree to our <Link href="/T&C" className="underline">Terms & Conditions.</Link></p>
    </div> */}
    <Button className="w-full" onClick={handleCheckout} disabled={isLoading}>
      {isLoading ? "Processing..." : "Place Order"}
    </Button>
  </div>
);