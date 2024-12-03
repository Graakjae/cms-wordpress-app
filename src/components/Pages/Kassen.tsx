"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext, CartItem } from "../Globals/Cart/context/CartContext";
import { InputCheckout } from "../ui/inputCheckout";
import Link from "next/link";
import { Button } from "../ui/button";
import ChevronLeft from "../icons/ChevronLeft";

export default function Kassen() {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart } = cartContext;

  const [clientCart, setClientCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setClientCart(cart);
  }, [cart]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle textarea changes
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("cart lenght", cart.length);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = "Fornavn er påkrævet";
    if (!formData.lastName) newErrors.lastName = "Efternavn er påkrævet";
    if (!formData.country) newErrors.country = "Land er påkrævet";
    if (!formData.address) newErrors.address = "Adresse er påkrævet";
    if (!formData.postalCode) newErrors.postalCode = "Postnummer er påkrævet";
    if (!formData.city) newErrors.city = "By er påkrævet";
    if (!formData.email) {
      newErrors.email = "Email er påkrævet";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ugyldig email-adresse";
    }
    if (!formData.phone) newErrors.phone = "Telefonnummer er påkrævet";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleCheckout() {
    if (!validateForm()) {
      return;
    }
    const customerData = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      address: formData?.address,
      city: formData?.city,
      postcode: formData?.postalCode,
      country: formData?.country,
      phone: formData?.phone,
      notes: formData?.notes,
    };

    const cartData = clientCart.map((item) => ({
      product_id: item?.product_id,
      quantity: item.quantity,
    }));

    try {
      const response = await fetch(
        "https://frederikgraakjaer.byhand.nu/wp-json/custom/v1/processOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ customer: customerData, cart: cartData }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Order processed successfully:", result);
        cartContext?.clearCart();
        // Redirect using window.location
        window.location.href = `/thank-you?orderId=${result.order_id}`;
        sessionStorage.setItem("orderCompleted", "true");
      } else {
        console.error("Error processing order:", result.message);
        alert("Failed to process the order: " + result.message);
      }
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className="mt-[120px] xl:mt-[200px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[100vh]">
      <Link
        className="group flex gap-2 items-center text-[16px] hover:text-PrimaryGreen"
        href="/kurv"
      >
        <ChevronLeft />
        Rediger din indkøbskurv
      </Link>
      <div className="flex items-center gap-4 mb-[30px] mt-[40px]">
        <h1 className="text-[24px] xl:text-[32px] font-semibold">
          Faktureringsoplysninger
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        <div className="w-full xl:w-[60%]">
          <div className="flex justify-between w-full gap-[30px]">
            <InputCheckout
              title="Fornavn"
              type="text"
              name="firstName"
              placeholder="Fornavn"
              className="w-full"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
            <InputCheckout
              title="Efternavn"
              type="text"
              name="lastName"
              placeholder="Efternavn"
              className="w-full"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </div>
          <InputCheckout
            title="Land / Region"
            type="text"
            name="country"
            placeholder="Land"
            value={formData.country}
            onChange={handleInputChange}
            error={errors.country}
          />
          <InputCheckout
            title="Adresse"
            type="text"
            name="address"
            placeholder="Adresse"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
          />
          <div className="flex justify-between w-full gap-[30px] mb-[25px]">
            <InputCheckout
              title="Postnummer"
              type="number"
              name="postalCode"
              placeholder="Postnummer"
              value={formData.postalCode}
              onChange={handleInputChange}
              error={errors.postalCode}
            />
            <InputCheckout
              title="By"
              type="text"
              name="city"
              placeholder="By"
              value={formData.city}
              onChange={handleInputChange}
              error={errors.city}
            />
          </div>
          <div className="flex justify-between w-full gap-[30px] mb-[25px]">
            <InputCheckout
              title="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <InputCheckout
              title="Telefonnummer"
              type="number"
              name="phone"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold">
              Eventuelle bemærkninger til ordren
            </label>
            <textarea
              name="notes"
              className="w-full h-[85px] border border-gray-200 bg-transparent px-3 py-1"
              value={formData.notes}
              onChange={handleTextareaChange}
            />
          </div>
        </div>
        <div className="w-full xl:w-[40%] bg-gray-100 px-[37px] py-[25px] flex flex-col justify-between">
          <div>
            <p className="text-[24px] font-semibold mb-[35px]">Din ordre</p>
            <p className="text-[20px] font-light uppercase">
              ( {clientCart?.length} varer i kurven )
            </p>
            {clientCart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-[#C7C7C7] py-[30px]"
              >
                <div>
                  <p className="font-semibold text-[18px]">{item?.name}</p>
                  <p>Antal: {item?.quantity}</p>
                </div>
                <div>
                  <p>{item?.price}</p>
                  <p>inkl. moms</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between border-t border-[#C7C7C7] pt-[15px] font-semibold mb-[55px]">
              <p>Total</p>
              <p>*Total pris*</p>
            </div>
          </div>

          <Button
            variant={clientCart.length === 0 ? "disabled" : "default"}
            size="lg"
            onClick={handleCheckout}
            disabled={clientCart.length === 0}
          >
            Gå til betaling
          </Button>
        </div>
      </div>
    </div>
  );
}
