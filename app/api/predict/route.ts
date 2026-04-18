export async function POST(req: Request) {
  const { pH, turbidity, temperature } = await req.json();

  let prediction = "UNSAFE";

  if (
    pH >= 6.5 && pH <= 8.5 &&
    turbidity < 5 &&
    temperature >= 10 && temperature <= 35
  ) {
    prediction = "SAFE";
  }

  return Response.json({ prediction });
}
