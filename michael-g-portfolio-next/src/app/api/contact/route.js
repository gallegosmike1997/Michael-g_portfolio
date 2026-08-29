export async function POST(req) {
  try {
    const body = await req.json();

    // Example: log or forward to email service
    console.log("Contact form submission:", body);

    return new Response(
      JSON.stringify({ success: true, message: "Message received." }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid request." }),
      { status: 400 }
    );
  }
}
