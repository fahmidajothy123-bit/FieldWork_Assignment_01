// Task 10: Fetch with Timeout
async function fetchWithTimeout(url, timeoutMs = 10000) {
    // Create timeout promise
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Request Timed Out after ${timeoutMs}ms`));
        }, timeoutMs);
    });

    // Create fetch promise
    const fetchPromise = fetch(url);

    try {
        // Race between fetch and timeout
        const response = await Promise.race([fetchPromise, timeoutPromise]);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        if (error.message.includes("Timed Out")) {
            throw error;
        }
        throw new Error(`Fetch failed: ${error.message}`);
    }
}

console.log("✅ fetchWithTimeout.js loaded successfully");