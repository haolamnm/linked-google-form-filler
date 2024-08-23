<img src="./images/final.png" alt="Screenshot of Auto-Form Filler" width="600"/>

## **PURPOSE OF THE WEBSITE**
Welcome to the Linked Google Form Filler guide! This project was created to streamline my own data entry tasks by linking information directly to a Google Form. While this solution is tailored to my needs as a college student, I wanted to share how I did it in case you're interested in setting up something similar for yourself.  
<br>
If you're looking to add a linked Google Form to your website for more efficient data collection, check out the instructions below.

## **EXPLANATION OF THE CODE**
This HTML code creates a form that collects user information and submits it directly to a Google Form. The form does not display the Google Form itself but instead uses hidden fields to send data to the form's backend. Here’s a breakdown of how it works:
___
1. **Form Tag Attributes:**
```html
<form id="registrationForm" action="your-google-form-response-link" method="POST" target="_blank" autocomplete="off">
```
- `action`: URL of the Google Form where the data will be submitted.
- `method`: The HTTP method used for the request (`POST` is used here to send data).
- `target`: Specifies where to open the response. `_blank` opens the response in a new tab.
- `autocomplete`: Set to `off` to prevent the browser from suggesting previously entered values.
___
2. **Form Fields:**
Each field collects specific data and is linked to corresponding Google Form fields through the `name` attribute. For example:
```html
<input type="text" id="name" name="entry.636287609" required placeholder="In hoa chữ đầu">
```
- `name="entry.636287609"`: Maps to a specific field in the Google Form for the user's name.
- `name="entry.259393673"`: Maps to a field for the phone number.
- Each `<input>` or `<select>` element uses these `name` attributes to correspond to the fields in the Google Form. When the form is submitted, the data is sent to the Google Form as if it was filled out directly.  
  
_NOTE: You can open yout Google Form and inspect the form fields using browser developer tools (usually by right-clicking the form and selecting "Inspect" or "Inspect Element") to find the `name` attributes of each field._
___
3. **Form Layout:**
The form uses `<div>` elements with classes `row` and `column` to organize the layout. Each field is placed within a column inside a row, which helps in aligning the form fields properly.
___
4. **Submit Button:**
The button with `type="submit"` sends the form data to the Google Form when clicked.
```html
<button type="submit" id="submitBtn">SUBMIT</button>
```
___
THE END.
