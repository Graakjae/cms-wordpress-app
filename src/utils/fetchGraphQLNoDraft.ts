export async function fetchGraphQLNoDraft<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string }
): Promise<T> {
  try {
    const body = JSON.stringify({
      query,
      variables,
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body,
        cache: "default",
        next: {
          tags: ["wordpress"],
        },
      }
    );

    if (!response.ok) {
      console.error("Response Status:", response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", JSON.stringify(data.errors, null, 2));
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error in fetchGraphQL:", error);
    throw error;
  }
}
