#!/bin/bash

# Function to calculate Simple Interest
calculate_simple_interest() {
    local principal=$1
    local rate=$2
    local time=$3
    local interest

    # Simple Interest formula: SI = (P * R * T) / 100
    interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

    echo "The Simple Interest is: \$${interest}"
}

# Read user input
echo "Enter the principal amount (P): "
read principal
echo "Enter the rate of interest (R) in percentage: "
read rate
echo "Enter the time period (T) in years: "
read time

# Call the function to calculate and display simple interest
calculate_simple_interest $principal $rate $time
