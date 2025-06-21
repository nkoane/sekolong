#!/usr/bin/env python3

import sys

def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5)+1):
        if x % i == 0:
            return False
    return True

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 primes.py <n>")
        sys.exit(1)

    try:
        n = int(sys.argv[1])
    except ValueError:
        print("Please provide a valid integer.")
        sys.exit(1)

    primes = [i for i in range(1, n+1) if is_prime(i)]
    print("Primes up to", n, ":", primes)

if __name__ == "__main__":
    main()