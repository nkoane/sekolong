#!/usr/bin/env node

function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error("Usage: node primes.js <n>");
    process.exit(1);
  }

  const n = parseInt(args[0], 10);
  if (isNaN(n)) {
    console.error("Please provide a valid integer.");
    process.exit(1);
  }

  const primes = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }

  console.log(`Primes up to ${n}:`, primes);
}

main();