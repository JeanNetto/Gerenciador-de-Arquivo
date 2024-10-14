function loadFile() {
    const input = document.getElementById('fileInput');
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const content = e.target.result;
            document.getElementById('fileContent').value = content;
        };
        
        reader.readAsText(file);
    } else {
        alert('Por favor, selecione um arquivo.');
    }
}

function downloadFile() {
    const content = document.getElementById('fileContent').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TesteGerenciador.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
