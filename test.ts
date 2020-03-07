export default {
  "objects": [
    {
      "id": "7y0y",
      "name": "엔트리봇",
      "script": "[[{\"id\":\"cl3l\",\"x\":3,\"y\":78,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"9fip\",\"x\":0,\"y\":0,\"type\":\"func_dalk__@dalkak/json__parse\",\"params\":[{\"id\":\"bl6z\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"{}\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"3atk\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"a\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[],\"_backupParams\":[{\"id\":\"bl6z\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"{}\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"3atk\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"a\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null]}]]",
      "objectType": "sprite",
      "rotateMethod": "free",
      "scene": "7dwq",
      "sprite": {
        "pictures": [
          {
            "id": "vx80",
            "dimension": {
              "width": 284,
              "height": 350,
              "scaleX": 0.3154574132492113,
              "scaleY": 0.3154574132492113
            },
            "fileurl": "/lib/entry-js/images/media/entrybot1.png",
            "name": "엔트리봇_걷기1",
            "scale": 100,
            "imageType": "png"
          },
          {
            "id": "4t48",
            "dimension": {
              "width": 284,
              "height": 350
            },
            "fileurl": "/lib/entry-js/images/media/entrybot2.png",
            "name": "엔트리봇_걷기2",
            "scale": 100,
            "imageType": "png"
          }
        ],
        "sounds": [
          {
            "duration": 1.3,
            "ext": ".mp3",
            "id": "8el5",
            "fileurl": "/lib/entry-js/images/media/bark.mp3",
            "name": "강아지 짖는 소리"
          }
        ]
      },
      "selectedPictureId": "vx80",
      "lock": false,
      "entity": {
        "x": 0,
        "y": 0,
        "regX": 142,
        "regY": 175,
        "scaleX": 0.3154574132492113,
        "scaleY": 0.3154574132492113,
        "rotation": 0,
        "direction": 90,
        "width": 284,
        "height": 350,
        "font": "undefinedpx ",
        "visible": true
      }
    }
  ],
  "scenes": [
    {
      "id": "7dwq",
      "name": "장면 1"
    }
  ],
  "variables": [
    {
      "name": "a",
      "id": "8mif",
      "visible": true,
      "value": "0",
      "variableType": "variable",
      "isCloud": false,
      "cloudDate": false,
      "object": null,
      "x": -230,
      "y": -115
    },
    {
      "name": "dalk_pack",
      "id": "wcag",
      "visible": true,
      "value": "0",
      "variableType": "list",
      "isCloud": false,
      "cloudDate": false,
      "object": null,
      "x": 120,
      "y": -115,
      "width": 100,
      "height": 120,
      "array": [
        {
          "data": "@dalkak/json"
        }
      ]
    },
    {
      "name": "초시계",
      "id": "brih",
      "visible": false,
      "value": 0,
      "variableType": "timer",
      "isCloud": false,
      "cloudDate": false,
      "object": null,
      "x": 134,
      "y": -70
    },
    {
      "name": " 대답 ",
      "id": "1vu8",
      "visible": false,
      "value": "0",
      "variableType": "answer",
      "isCloud": false,
      "cloudDate": false,
      "object": null,
      "x": 150,
      "y": -100
    }
  ],
  "messages": [],
  "functions": [
    {
      "id": "dalk__@dalkak/json__parse",
      "content": "[[{\"id\":\"5jfw\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"3rvt\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"ocl6\",\"x\":0,\"y\":0,\"type\":\"stringParam_mg1x\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"t0j0\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\" 해석하기 →\",{\"id\":\"nyto\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"jly0\",\"x\":0,\"y\":0,\"type\":\"stringParam_a6n1\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
    },
    {
      "id": "dalk__@dalkak/json__get",
      "content": "[[{\"id\":\"5rk4\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"kt91\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"cj63\",\"x\":0,\"y\":0,\"type\":\"stringParam_qn9e\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"mvcc\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"의 \",{\"id\":\"k3jd\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"bg9m\",\"x\":0,\"y\":0,\"type\":\"stringParam_eupl\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"nk5g\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"값 구하기 →\",{\"id\":\"2tuj\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"6852\",\"x\":0,\"y\":0,\"type\":\"stringParam_bnyu\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
    },
    {
      "id": "dalk__@dalkak/json__set",
      "content": "[[{\"id\":\"qtam\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"qttv\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"변수 \",{\"id\":\"y5ud\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"2453\",\"x\":0,\"y\":0,\"type\":\"stringParam_vtud\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"x81p\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"의 \",{\"id\":\"c9yr\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"1fmu\",\"x\":0,\"y\":0,\"type\":\"stringParam_w36l\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"zphv\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"값을 \",{\"id\":\"vvyr\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"g86m\",\"x\":0,\"y\":0,\"type\":\"stringParam_qy86\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"iz6e\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"로 정하기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
    }
  ],
  "tables": [],
  "speed": 60,
  "interface": {
    "menuWidth": 280,
    "canvasWidth": 480,
    "object": "7y0y"
  },
  "expansionBlocks": [],
  "aiUtilizeBlocks": []
}