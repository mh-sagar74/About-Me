export default function ContactPage() {
  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-semibold">Contact Me</h1>
      <div>
        <h1 className="text-xl m-6">
          Name :{" "}
          <a
            href="https://www.facebook.com/mr.sagar74"
            target="_blank"
            className="font-semibold">
            Mominul Haque Sagar
          </a>
        </h1>
        <h1 className="text-xl m-6">
          Study : B.Sc. in CSE at{" "}
          <a href="https://nwu.ac.bd/" target="_blank">
            North Western University, Khulna
          </a>
        </h1>
        <h1 className="text-xl m-6">
          GitHub :{" "}
          <a href="https://github.com/mominul-prayersconnect" target="_blank">
            mominul-prayersconnect
          </a>
        </h1>
        <h1 className="text-xl m-6">WhatsApp : +8801300842702</h1>
      </div>
    </div>
  );
}
