export function Verify() {
  return (
    <div
      className="p-10 bg-[#0f0f0f] rounded-lg"
      style={{ borderLeft: "100px solid #000" }}
    >
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <h3 className="text-5xl font-bold">Verification</h3>
          <h2>
            You can use a 'Press to enter' type of verification or you can use
            Wick's custom captcha that members need to answer before gaining
            access to your server. Verification is super useful against raids
            and attacks.
          </h2>
        </div>
      </div>
    </div>
  );
}
