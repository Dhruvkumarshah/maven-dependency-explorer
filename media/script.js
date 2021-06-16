(function () {
  window.addEventListener("message", (event) => {
    document.addEventListener("keydown", logKey);

    var spinner = document.getElementById("spinner");
    spinner.style.display = "none";
    const graph = event.data;
    loadDependency(graph);
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }

    document.getElementById("expand").addEventListener("click", function () {
      expand();
    });

    var collapse = document.getElementById("collapse");
    collapse.addEventListener("click", function () {
      var caretDown = document.getElementsByClassName("caret");
      var nestedLI = document.getElementsByClassName("nested");
      for (i = 0; i < caretDown.length; i++) {
        if (nestedLI[i]) {
          nestedLI[i].classList.remove("active");
        }
        if (caretDown[i]) {
          caretDown[i].classList.remove("caret-down");
        }
      }
    });

    let input = document.getElementById("input");

    input.oninput = filter;

    function filter(dep) {
      expand();
      var listItem = document.getElementsByClassName("list-group-item");
      var element = document.getElementsByClassName("data-element");
      var treeElement = document.getElementsByClassName("data-element-1");

      if (!dep.target.value || dep.target.value.length < 2) {
        const hidden = document.getElementsByClassName("hidden");

        Array.from(hidden).forEach((value) => value.classList.remove("hidden"));
        return;
      }

      Array.from(element).forEach((value) => {
        if (value.innerHTML.indexOf(dep.target.value) === -1) {
          value.classList.add("hidden");
        } else {
          value.classList.remove("hidden");
        }
      });

      Array.from(treeElement).forEach((value) => {
        if (value.innerHTML.indexOf(dep.target.value) === -1) {
          value.classList.add("hidden");
        } else {
          value.classList.remove("hidden");
        }
      });

      Array.from(listItem).forEach((value) => {
        const ul = value.querySelector("ul");

        if (ul) {
          const li = ul.querySelector("li");

          if (li.className.indexOf("hidden") > -1) {
            value.classList.add("hidden");
          } else {
            value.classList.remove("hidden");
          }
        }
      });
    }

    function loadDependency(graph) {
      const key = Object.keys(graph)[0];
      delete graph[key];
      console.log(graph);
      var ul = document.getElementById("graph");

      var listitem = document.getElementById("listitem");

      for (const property in graph) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        var text = document.createElement("span");
        text.classList.add("caret");
        text.innerHTML = property;
        li.appendChild(text);

        var childUL = document.createElement("ul");
        childUL.classList.add("nested");

        const keys = Object.keys(graph[property]);

        Object.keys(graph[property]).forEach((res) => {
          childUL.appendChild(createList(graph, res));

          var listitemLI = document.createElement("li");
          listitemLI.classList.add("list-group-item");
          listitemLI.classList.add("data-element");

          listitemLI.innerHTML = res;
          listitem.appendChild(listitemLI);
        });

        li.appendChild(childUL);

        ul.appendChild(li);
      }
    }

    function createList(graph, res) {
      var childLI = document.createElement("li");
      childLI.classList.add("data-element-1");
      var text = document.createElement("span");
      text.classList.add("caret");
      text.innerHTML = res;
      childLI.appendChild(text);

      if (graph[res]) {
        childLI.appendChild(createUL(graph[res]));
      }

      return childLI;
    }

    function createUL(res) {
      var childUL = document.createElement("ul");
      childUL.classList.add("nested");
      Object.keys(res).forEach((data) => {
        var li = document.createElement("li");
        li.classList.add("data-element-1");
        var text = document.createElement("span");
        if (Object.keys(res[data]).length > 0) {
          text.classList.add("caret");
        }
        text.innerHTML = data;
        li.appendChild(text);

        if (Object.keys(res[data]).length > 0) {
          li.appendChild(createUL(res[data]));
        }

        childUL.appendChild(li);
      });

      return childUL;
    }

    function expand() {
      var caretDown = document.getElementsByClassName("caret");
      var nestedLI = document.getElementsByClassName("nested");
      for (i = 0; i < caretDown.length; i++) {
        if (nestedLI[i]) {
          nestedLI[i].classList.add("active");
        }
        if (caretDown[i]) {
          caretDown[i].classList.add("caret-down");
        }
      }
    }

    function logKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 70) {
        document.getElementById("input").focus();
        e.preventDefault();
      }
    }
  });
})();
