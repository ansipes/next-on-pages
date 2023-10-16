// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

export const runtime = "edge";

// export async function GET(request) {
//   return new Response(JSON.stringify({ name: "Andrew Sipes" }));
// }

export default async function GET(request) {
  try {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
