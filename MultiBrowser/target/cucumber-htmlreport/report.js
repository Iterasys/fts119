$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "Busca",
  "description": "",
  "id": "busca",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \u003cbrowser\u003e e digito \u003ctermo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "busca;busca-positiva;",
  "rows": [
    {
      "cells": [
        "browser",
        "termo"
      ],
      "line": 7,
      "id": "busca;busca-positiva;;1"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 8,
      "id": "busca;busca-positiva;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 9,
      "id": "busca;busca-positiva;;3"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 10,
      "id": "busca;busca-positiva;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 6025803121,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4288745938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 1045744685,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 4895301234,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4316348817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 905955564,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 4655437217,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4542552442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 996365927,
  "status": "passed"
});
});