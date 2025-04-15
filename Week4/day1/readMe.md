# Web Fundamentals - Lecture 4: Introduction to the DOM & Interactive Elements

## 1. What is the DOM?
The **Document Object Model (DOM)** is a structured representation of an HTML document that JavaScript can manipulate.
- It represents the page as a tree of elements.
- JavaScript interacts with the DOM to dynamically update content, styles, and attributes.
- D=> Document as the file / O=> Object => as the elements/ M=> Model as the layout
- Example: Changing the text of a heading without modifying the HTML file.
- Test with console.log(document)
-  an API (or application programming interface) is “is a set of subroutine definitions, protocols, and tools for building application software

## 2. Accessing Elements in the DOM
JavaScript provides multiple ways to select and manipulate elements:
- **`document.querySelector()`**: Selects the first matching element.
- **`document.querySelectorAll()`**: Selects all matching elements.
- Examples:
  - Select an element by tag name (`h1`), class (`.button`), or ID (`#container`).
  - Change styles dynamically (`element.style.color = 'red'`).
  - Modify attributes (`element.setAttribute('src', 'new-image.jpg')`).

## 3. Changing Content Dynamically
- **Modifying Text**: `innerText` vs. `innerHTML`.
- **Updating Styles**: Changing CSS properties with JavaScript.
- **Manipulating Attributes**: Adding/removing/changing element attributes.

## 4. Adding Interactivity with Event Listeners
- **Using `onchange` with Forms**: Example of detecting when a `<select>` dropdown value changes.
- **Using `oninput` for Live Updates**: Example of updating text dynamically as a user types.
- **`setTimeout()` for Delayed Actions**: Example of showing a message after a few seconds.

## Conclusion
By the end of this lecture, students will:
- Understand what the DOM is and why it is important.
- Select and manipulate elements using JavaScript.
- Dynamically change content, styles, and attributes.
- Implement user interaction with event listeners (`onchange`, `oninput`).
- Use `setTimeout()` to create delayed actions.

---

