export default {
    "objects": [
      {
        "id": "7y0y",
        "name": "엔트리봇",
        "script": "[[{\"id\":\"0ui2\",\"x\":38,\"y\":136,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"tdl0\",\"x\":0,\"y\":0,\"type\":\"func_dalk__@dalkak/kachi-server__newServer\",\"params\":[{\"id\":\"tbcr\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"server\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"412d\",\"x\":0,\"y\":0,\"type\":\"func_dalk__@dalkak/kachi-server__serverReady\",\"params\":[{\"id\":\"oh0f\",\"x\":0,\"y\":0,\"type\":\"get_variable\",\"params\":[\"ec95\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"u4zb\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"msg\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"477f\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"client\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"t3l0\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[\"data\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],[{\"id\":\"0unh\",\"x\":83.97916599999999,\"y\":288,\"type\":\"when_message_cast\",\"params\":[null,\"vyok\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"iibc\",\"x\":0,\"y\":0,\"type\":\"set_variable\",\"params\":[\"3cjw\",{\"id\":\"ojcx\",\"x\":0,\"y\":0,\"type\":\"get_variable\",\"params\":[\"sn7o\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"n3zo\",\"x\":0,\"y\":0,\"type\":\"set_variable\",\"params\":[\"eb05\",{\"id\":\"sh7x\",\"x\":0,\"y\":0,\"type\":\"get_variable\",\"params\":[\"2wo2\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"zfzb\",\"x\":0,\"y\":0,\"type\":\"func_dalk__@dalkak/kachi-server__serverSend\",\"params\":[{\"id\":\"9u6d\",\"x\":0,\"y\":0,\"type\":\"get_variable\",\"params\":[\"3cjw\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"5jm7\",\"x\":0,\"y\":0,\"type\":\"get_variable\",\"params\":[\"eb05\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]",
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
        "name": "_client",
        "id": "3cjw",
        "visible": true,
        "value": 0,
        "variableType": "variable",
        "isCloud": false,
        "cloudDate": false,
        "object": null,
        "x": -230,
        "y": -3
      },
      {
        "name": "_data",
        "id": "eb05",
        "visible": true,
        "value": 0,
        "variableType": "variable",
        "isCloud": false,
        "cloudDate": false,
        "object": null,
        "x": -230,
        "y": -31
      },
      {
        "name": "client",
        "id": "sn7o",
        "visible": true,
        "value": 0,
        "variableType": "variable",
        "isCloud": false,
        "cloudDate": false,
        "object": null,
        "x": -230,
        "y": -59
      },
      {
        "name": "data",
        "id": "2wo2",
        "visible": true,
        "value": 0,
        "variableType": "variable",
        "isCloud": false,
        "cloudDate": false,
        "object": null,
        "x": -230,
        "y": -87
      },
      {
        "name": "server",
        "id": "ec95",
        "visible": true,
        "value": 0,
        "variableType": "variable",
        "isCloud": false,
        "cloudDate": false,
        "object": null,
        "x": -230,
        "y": -115
      },
      {
        "name": "dalk_pack",
        "id": "ozr7",
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
            "data": "@dalkak/kachi-server@0.1.5"
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
    "messages": [
      {
        "id": "vyok",
        "name": "msg"
      }
    ],
    "functions": [
      {
        "id": "dalk__@dalkak/kachi-server__newServer",
        "content": "[[{\"id\":\"g0zb\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"ycu7\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"새 서버 →\",{\"id\":\"d912\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"z175\",\"x\":0,\"y\":0,\"type\":\"stringParam_gwu3\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
      },
      {
        "id": "dalk__@dalkak/kachi-server__serverReady",
        "content": "[[{\"id\":\"g623\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"xnls\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"서버 \",{\"id\":\"jaf0\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"fjxt\",\"x\":0,\"y\":0,\"type\":\"stringParam_1c1s\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"x2jt\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"와 신호 \",{\"id\":\"yv73\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"x3t6\",\"x\":0,\"y\":0,\"type\":\"stringParam_y1ie\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"uptc\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\", 유저 변수 \",{\"id\":\"8zks\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"lcqw\",\"x\":0,\"y\":0,\"type\":\"stringParam_edi8\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"t5w6\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\", 데이터 변수 \",{\"id\":\"dtat\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"h1gb\",\"x\":0,\"y\":0,\"type\":\"stringParam_9fn4\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"d6oz\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\" 연결하기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
      },
      {
        "id": "dalk__@dalkak/kachi-server__serverSend",
        "content": "[[{\"id\":\"to1h\",\"x\":0,\"y\":0,\"type\":\"function_create\",\"params\":[{\"id\":\"6wg4\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"유저 \",{\"id\":\"pcil\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"7ced\",\"x\":0,\"y\":0,\"type\":\"stringParam_u7kg\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"pp57\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"에게 \",{\"id\":\"nrk4\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"1sjz\",\"x\":0,\"y\":0,\"type\":\"stringParam_8pbn\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"12ji\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\" 보내기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"
      }
    ],
    "tables": [],
    "speed": 60,
    "interface": {
      "canvasWidth": 324,
      "menuWidth": 280,
      "object": "7y0y"
    },
    "expansionBlocks": [],
    "aiUtilizeBlocks": []
  }