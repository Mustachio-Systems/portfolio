import { Metadata } from "next";
import ContactClient from "@/components/client/contact"; 

export const metadata: Metadata = {
  title: "Contact", 
  description: "Get in touch with Mustachio Systems.",
};

export default function ContactPage() {
  return <ContactClient />;
}