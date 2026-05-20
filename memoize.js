// Task 09: Memoize Function
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        // Create a unique key from arguments
        const key = JSON.stringify(args);
        
        // Return cached result if exists
        if (key in cache) {
            console.log(`📦 Cache hit for: ${key}`);
            return cache[key];
        }
        
        // Otherwise compute and cache the result
        console.log(`💾 Computing new result for: ${key}`);
        const result = fn(...args);
        cache[key] = result;
        
        return result;
    };
}

console.log("✅ memoize.js loaded successfully");