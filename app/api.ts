export async function runResearch(topic: string) {
  const response = await fetch("https://research-agent-api-eonp.onrender.com/research", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic }),
  });

  if (!response.ok) {
    throw new Error("Research failed. Please try again.");
  }

  return response.json();
}