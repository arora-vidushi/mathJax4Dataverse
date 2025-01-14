var arr = ["title", "dsDescription", "metadata_title", "metadata_dsDescription"]; // HTML ids that we need to process
MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }, //to make tex work
  startup: {
    pageReady: () => {
      // alert('Running MathJax');
      return MathJax.startup.defaultPageReady();
    }
  },
  options: {
    ignoreHtmlClass: '.*',  //All other classes apart from processHtml class will be ignored by matjax
    processHtmlClass: 'enable-math-processing' , //html class 'enable-math-processing' with that will be processed by mathjax
  }
};
function convertcdn() { //importing mathjax script cdn 
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  // script.async = true;
  document.body.appendChild(script);
};

function addDescendantsToOutput(elem , output) { //adding all child elements to the set
  for (let child of elem.children) {
    console.log("Child: " + child)
    output.add(child);
    addDescendantsToOutput(child, output);
  }
}

function convert() { //adding "enable-math-processing" to HTML elements with id stored in arr
  
    let output = new Set(); 
    for (id of arr) { 
      let elem = document.getElementById(id);  
      if(elem != null){ //adding required elements to set
        output.add(document.getElementById(id)); 
        addDescendantsToOutput(elem, output);

    }
  }
  
    for (out of output) { //adding "enable-math-processing" to required elements
      //console.log(out)
      out.classList.add('enable-math-processing');
    //  / console.log(out)
    }
  
  }