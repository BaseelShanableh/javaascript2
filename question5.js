
    // Create font options
    const fontOptions = ['Arial', 'Times New Roman', 'Verdana', 'Courier New'];

    // Create size options
    const sizeOptions = ['12px', '16px', '20px', '24px'];

    // Create font select dropdown
    const fontSelect = document.createElement('select');
    fontSelect.setAttribute('id', 'fontSelect');
    fontOptions.forEach(font => {
      const option = document.createElement('option');
      option.value = font;
      option.textContent = font;
      fontSelect.appendChild(option);
    });
    document.body.appendChild(document.createTextNode('Select Font: '));
    document.body.appendChild(fontSelect);

    // Create size select dropdown
    const sizeSelect = document.createElement('select');
    sizeSelect.setAttribute('id', 'sizeSelect');
    sizeOptions.forEach(size => {
      const option = document.createElement('option');
      option.value = size.replace('px', '');
      option.textContent = size;
      sizeSelect.appendChild(option);
    });
    document.body.appendChild(document.createTextNode('Select Font Size: '));
    document.body.appendChild(sizeSelect);

    // Create checkboxes for styles
    const styles = ['Italic', 'Bold', 'Underline'];
    styles.forEach(style => {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `${style.toLowerCase()}Checkbox`);
      const label = document.createElement('label');
      label.setAttribute('for', `${style.toLowerCase()}Checkbox`);
      label.textContent = style;
      document.body.appendChild(checkbox);
      document.body.appendChild(label);
    });

    // Create textarea for text input
    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'textInput');
    textarea.setAttribute('placeholder', 'Type your text here...');
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(textarea);

    // Create apply styles button
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Styles';
    applyButton.addEventListener('click', applyStyles);
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(applyButton);

    // Create output div for displaying styled text
    const outputDiv = document.createElement('div');
    outputDiv.setAttribute('id', 'output');
    document.body.appendChild(outputDiv);

    // Function to apply styles
    function applyStyles() {
      const font = document.getElementById('fontSelect').value;
      const size = document.getElementById('sizeSelect').value + 'px';
      const isItalic = document.getElementById('italicCheckbox').checked ? 'italic' : 'normal';
      const isBold = document.getElementById('boldCheckbox').checked ? 'bold' : 'normal';
      const isUnderline = document.getElementById('underlineCheckbox').checked ? 'underline' : 'none';

      const textInput = document.getElementById('textInput').value;

      const styledText = `<p style="font-family: ${font}; font-size: ${size}; font-style: ${isItalic}; font-weight: ${isBold}; text-decoration: ${isUnderline};">${textInput}</p>`;

      document.getElementById('output').innerHTML = styledText;
    }