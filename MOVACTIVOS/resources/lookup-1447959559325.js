(function(window, undefined) {
  var dictionary = {
    "adae59b1-e329-4a08-ad11-f37c1f2a66b9": "NuevoMovimiento",
    "489a44b7-db9e-4b02-886e-8e81ee49b3ee": "AdministrarMotivosAlmacen",
    "66cc800f-5e12-4fa2-9237-3e97b3a9cb25": "R_MOVIMIENTOS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "b6dc4017-8bef-42ae-b4a0-ff902e716046": "AdministrarMovimientos",
    "150fff46-e62c-4a2b-8bca-576cbb0b1f47": "Plataforma",
    "2e98d2db-2ac2-4749-adaa-6c42c75203d4": "R_ALMACEN",
    "44f9bbb8-fa23-4640-8350-bbc51da0a9dd": "R_ACTIVOS",
    "db0afc98-2ca0-4f69-8869-501e08bf2c79": "AdministrarAlmacen",
    "b5b04a7e-953b-4056-bc29-204a3f35aac4": "AdministrarActivos",
    "d0de90e9-f65f-43f3-8705-778fdb8616ff": "AdministrarUsuarios",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);