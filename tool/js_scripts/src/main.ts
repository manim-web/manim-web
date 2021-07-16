import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { LiteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages";

const adaptor = new LiteAdaptor();
RegisterHTMLHandler(adaptor);

const html = mathjax.document("", {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new SVG({ fontCache: "none" }),
});

function tex2svg(equation: string, isInline: boolean): string {
  return adaptor.innerHTML(html.convert(equation, { display: !isInline }));
}

//@ts-ignore
window.tex2svg = tex2svg;
