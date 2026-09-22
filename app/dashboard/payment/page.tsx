"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [payment, setPayment] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      <div className="bg-white px-6 py-6">
        <p className="text-sm text-gray-500">Amount</p>

        <h2 className="text-3xl font-bold text-[#EE7421]">
          $10.00
        </h2>
      </div>

      <div className="px-6 pt-6">
        <p className="mb-6 text-center text-sm text-gray-600">
          Payment method
        </p>

        <button
          onClick={() => setPayment("paypal")}
          className="mx-auto mb-4 flex h-12 w-full max-w-xs items-center justify-center rounded-lg border border-gray-200 bg-white"
        >
          <Image
            src="/paypal.png"
            alt="PayPal"
            width={90}
            height={30}
          />
        </button>

        <button
          onClick={() => setPayment("skrill")}
          className="mx-auto mb-4 flex h-12 w-full max-w-xs items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white"
        >
          <Image
            src="/skrill.svg"
            alt="S"
            width={22}
            height={22}
          />

          <Image
            src="/skrill2.svg"
            alt="Skrill"
            width={65}
            height={25}
          />
        </button>

        <button
          onClick={() => setPayment("bank")}
          className="mx-auto mb-4 flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white"
        >
          <Image
            src="/bank.png"
            alt="Bank"
            width={24}
            height={24}
          />

          <span className="text-sm text-gray-600">
            Bank Transfer
          </span>
        </button>

        <button
          onClick={() => setPayment("card")}
          className={`mx-auto flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-lg border ${
            payment === "card"
              ? "border-[#EE7421] bg-[#EE7421]"
              : "border-gray-200 bg-white"
          }`}
        >
          <Image
            src="/card.png"
            alt="Credit Card"
            width={25}
            height={25}
            className={payment === "card" ? "" : "brightness-0"}
          />

          <span
            className={
              payment === "card"
                ? "text-sm text-white"
                : "text-sm text-gray-600"
            }
          >
            Credit Card
          </span>
        </button>

        {payment === "card" && (
          <div className="mx-auto mt-6 w-full max-w-xs">
            <div className="relative mb-4">
              <label className="absolute -top-2 left-3 bg-[#FFF8E1] px-1 text-sm text-gray-700">
                Card number
              </label>

              <input
                type="text"
                placeholder="XXXXX XXXXX XXXX"
                className="h-14 w-full rounded-lg border border-gray-300 bg-transparent px-3"
              />

              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 gap-2">
                <Image
                  src="/visa.png"
                  alt="Visa"
                  width={40}
                  height={25}
                />

                <Image
                  src="/mastercard.png"
                  alt="Mastercard"
                  width={40}
                  height={25}
                />
              </div>
            </div>

            <div className="mb-4 flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="h-14 flex-1 rounded-lg border border-gray-300 bg-transparent px-3"
              />

              <input
                type="text"
                placeholder="CVC"
                className="h-14 w-28 rounded-lg border border-gray-300 bg-transparent px-3"
              />
            </div>

            <div className="mb-3 flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-orange-500"
              />

              <p className="text-xs text-gray-600">
                Save as my default card.
              </p>
            </div>

            <p className="mb-4 text-[11px] text-gray-600">
              By Selecting the "Payment Button" below, you confirm
              that you have read and accept Terms & Conditions.
            </p>

            <button
              onClick={() => setSuccess(true)}
              className="h-12 w-full rounded-lg bg-[#EE7421] font-semibold text-white"
            >
              Make Payment
            </button>
          </div>
        )}

        {payment !== "" && payment !== "card" && (
          <button
            onClick={() => setSuccess(true)}
            className="mx-auto mt-6 block h-12 w-full max-w-xs rounded-lg bg-[#EE7421] font-semibold text-white"
          >
            Make Payment
          </button>
        )}
      </div>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white">
              <Image src="vector.png"alt="check" width={50} height={50} />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Successful
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}