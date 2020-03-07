export default {
  "objects": [
    {
      "id": "7y0y",
      "name": "엔트리봇",
      "script": "[[{\"id\":\"n4bi\",\"x\":-22,\"y\":55,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"2aj7\",\"x\":0,\"y\":0,\"type\":\"repeat_basic\",\"params\":[{\"id\":\"rglw\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[10],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"q1w0\",\"x\":0,\"y\":0,\"type\":\"move_x\",\"params\":[{\"id\":\"fuy6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"10\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]",
      "objectType": "sprite",
      "rotateMethod": "free",
      "scene": "7dwq",
      "sprite": {
        "pictures": [
          {
            "id": "vx80",
            "dimension": {
              "width": 284,
              "height": 350
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
      "name": "초시계",
      "id": "brih",
      "visible": false,
      "value": "0",
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
      "id": "yob0",
      "content": "[[{\"id\":\"phvv\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"k7i1\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"함수\",{\"id\":\"q252\",\"x\":0,\"y\":0,\"type\":\"function_field_boolean\",\"params\":[{\"id\":\"lu96\",\"x\":0,\"y\":0,\"type\":\"booleanParam_q7gp\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"n64m\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"7lpa\",\"x\":0,\"y\":0,\"type\":\"stringParam_7rwe\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},{\"id\":\"rit9\",\"x\":0,\"y\":0,\"type\":\"dialog\",\"params\":[{\"id\":\"pz2u\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"안녕!\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},\"speak\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
    },
    {
      "id": "ncl6",
      "content": "[[{\"id\":\"5u56\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"k7i1\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"함수\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]}]]"
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