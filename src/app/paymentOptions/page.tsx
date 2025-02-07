import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function PaymentOptions() {
  return (
    <div className="max-w-screen-lg mx-auto text-custom-green px-4 md:px-8 py-20 md:py-24 space-y-10">
      {/* Payment Options Section */}
      <section className="space-y-4 ">
        <h1 className="text-2xl md:text-4xl font-bold">Payment Options</h1>
        <p>
          At <strong>NIKE</strong>, we ensure that your shopping experience is smooth, secure, and convenient. We offer various payment methods to help you complete your purchase with ease.
        </p>
        <p>We currently accept payments through the following methods:</p>
<ul className="list-disc ml-5 space-y-2">
  <li><strong>Easypaisa:</strong> Convenient and quick payments via your Easypaisa app.</li>
  <li><strong>JazzCash:</strong> Fast and reliable payments through your JazzCash app.</li>
  <li><strong>Bank Transfer:</strong> Secure transfers directly to our bank account.</li>
</ul>
</section>

      {/* FAQs Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions (FAQs)</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="text-xl">
            <AccordionTrigger className="text-base md:text-lg">Can I use multiple payment methods for a single order?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Currently, we support only one payment method per order. Please select the payment option that works best for you during checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="text-lg">
            <AccordionTrigger className="text-base md:text-lg">How do I know if my payment was successful?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Once your payment is processed, you will receive a confirmation email or SMS with your order details. You can also check the transaction status through your payment provider.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="text-lg">
            <AccordionTrigger className="text-base md:text-lg">Is it safe to pay online?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Yes, your payment details are securely processed using encryption technologies, ensuring that your information remains safe at all times.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base md:text-lg">What happens if my payment fails?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              If your payment fails, please retry with the same or another payment method. If the issue persists, reach out to our support team for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base md:text-lg">Are there any hidden charges for using these payment methods?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              No, there are no hidden charges for using any of our supported payment methods. What you see is what you pay.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-base md:text-lg">Can I cancel my payment after it&apos;s processed?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Once a payment is processed, it cannot be canceled. However, if you need assistance with a refund or order cancellation, our customer support team will be happy to help.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-base md:text-lg">What details do I need for Bank Transfer payments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              For bank transfers, you&apos;ll need our account number, account name, and bank details, which will be provided during checkout. Make sure to use your order number as the payment reference.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-base md:text-lg">Do you support international payments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              Currently, we accept payments only within Pakistan via our listed payment methods. We do not support international payments at this time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-base md:text-lg">Can I pay in installments?</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">
              At this moment, we do not offer installment payment options. Full payment is required at checkout.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
