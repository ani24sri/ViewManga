class loadCSS
{
    elementData:string;
    constructor(style :string)
    {
        this.elementData = style;
    }

    fetchSASS(elementData:string)
    {
       let body = document.createElement("IFrame");
       return "<p>"+body+"</p>";
    }
}