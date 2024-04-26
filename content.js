class Tooltip {
    constructor() {
        this.tooltip = null;
    }

    updatePosition(e) {
        if (this.tooltip !== null) {
            this.tooltip.style.left = `${e.pageX + 15}px`;
            this.tooltip.style.top = `${e.pageY + 15}px`;
        }
    }

    createTooltip(e) {
        let selectedText = window.getSelection().toString();
        let charCount = selectedText.length;

        if (charCount > 0) {
            this.tooltip = document.createElement('div');
            this.tooltip.id = 'charToolTip';
            this.tooltip.textContent = `${charCount} chars.`;
            this.tooltip.style.position = 'fixed';
            this.tooltip.style.left = `${e.pageX + 15}px`;
            this.tooltip.style.top = `${e.pageY + 15}px`;
            this.tooltip.style.backgroundColor = "white";
            this.tooltip.style.border = "1px solid black";
            document.body.appendChild(this.tooltip);
        }
    }

    removeTooltip() {
        if (this.tooltip !== null) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }
}

let tooltip = new Tooltip();

document.addEventListener('mousemove', (e) => tooltip.updatePosition(e));
document.addEventListener('mouseup', (e) => tooltip.createTooltip(e));
document.addEventListener('mousedown', () => tooltip.removeTooltip());
