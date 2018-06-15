



export class Schema {
  static schems : any = {
    "components": {
      "database": {
        "title": "Database",
        "fields": [{
          "name": "host",
          "title": "Host",
          "type": "string",
          "required": true
        },
          {
            "name": "port",
            "title": "Port",
            "type": "integer"
          },
          {
            "name": "username",
            "title": "Username",
            "type": "string"
          },
          {
            "name": "password",
            "title": "Password",
            "type": "password"
          }
        ]
      },
      "nso": {
        "title": "NSO",
        "fields": [{
          "name": "scheme",
          "title": "Scheme",
          "type": "dropdown",
          "required": true,
          "options": [{
            "http": "HTTP"
          },
            {
              "https": "HTTPS"
            }
          ]
        },
          {
            "name": "host",
            "title": "Host",
            "type": "string",
            "required": true
          },
          {
            "name": "port",
            "title": "Port",
            "type": "integer",
            "required": true
          },
          {
            "name": "username",
            "title": "Username",
            "type": "string",
            "required": true
          },
          {
            "name": "password",
            "title": "Password",
            "type": "password",
            "required": true
          }
        ]
      },
      "log": {
        "title": "Log",
        "fields": [{
          "name": "directory",
          "title": "Directory",
          "type": "string",
          "required": true
        },
          {
            "name": "systemLogFile",
            "title": "System Log File",
            "type": "string",
            "required": true
          },
          {
            "name": "auditLogFile",
            "title": "Audit Log File",
            "type": "string",
            "required": true
          },
          {
            "name": "logLevel",
            "title": "Log Level",
            "type": "dropdown",
            "widget": "select",
            "options": [{
              "debug": "Debug"
            },
              {
                "error": "Error"
              },
              {
                "info": "Info"
              },
              {
                "warning": "Warning"
              }
            ],
            "required": true
          }
        ]
      },
      "granite": {
        "title": "Granite",
        "fields": [{
          "name": "url",
          "title": "URL",
          "type": "string",
          "required": false
        },
          {
            "name": "apiKey",
            "title": "API Key",
            "type": "string",
            "required": false
          }
        ]
      }
    }
  }

}