# Unhandled Zero Division in JavaScript Function

This repository demonstrates a common error in JavaScript: improper handling of division by zero. The `foo` function does not gracefully handle cases where either input (`a` or `b`) is zero, leading to unexpected behavior.

## Bug

The `bug.js` file contains the faulty `foo` function.  When either `a` or `b` is zero, the function incorrectly returns 0 instead of raising an error or handling the exceptional case appropriately.

## Solution

The `bugSolution.js` file provides a corrected version of the `foo` function. It now explicitly checks for division by zero and throws an error if encountered, improving the robustness of the code.