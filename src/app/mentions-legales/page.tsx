import Link from 'next/link'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  robots: 'noindex,nofollow',
  title: 'Nuit Détente - Mentions Légales',
}

export default function LegalNotice() {
  return (
    <section className="container my-10 sm:my-20 xl:my-32">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Legal Notice
      </h1>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Website Owner
      </h2>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Company Name :</strong> Information not available
        </li>

        <li>
          <strong>Legal Form :</strong> Sole trader
        </li>

        <li>
          <strong>Headquarters :</strong> Rodez
        </li>

        <li>
          <strong>Registration Number :</strong> 81255366700021
        </li>

        <li>
          <strong>Phone Number:</strong> 06 26 91 49 66
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Hosting Provider
      </h2>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Hosting Company :</strong> Hostinger International Ltd
        </li>

        <li>
          <strong>Address :</strong> 61 Lordou Vironos Street, 6023, Larnaca, Cyprus
        </li>

        <li>
          <strong>Contact :</strong>&nbsp;
          <Link href="mailto:gdpr@hostinger.com">gdpr@hostinger.com</Link>
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Intellectual Property
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        All content on this website, including text, graphics, logos, images, and any other
        material, is the property of Nuit Détente or its content suppliers and is protected by
        copyright laws. Reproduction, distribution, or public display of the content without prior
        written consent from Nuit Détente is strictly prohibited.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Limitation of Liability
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Nuit Détente is not responsible for any direct or indirect damages resulting from the use or
        inability to use this website. While we strive to provide accurate and up-to-date
        information, errors or omissions may occur, and we do not guarantee the completeness or
        accuracy of the content.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Data Protection and Privacy
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For information about how we collect, use, and protect your personal data, please refer to
        our <Link href="/mentions-legales">Privacy Policy</Link>.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Governing Law
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        These terms and conditions are governed by the laws of France. Any disputes shall be subject
        to the exclusive jurisdiction of the courts of France.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contact
      </h2>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>For any inquiries or legal concerns, please contact us at :</li>

        <li>
          <strong>Phone Number:</strong> 06 26 91 49 66
        </li>
      </ul>
    </section>
  )
}
