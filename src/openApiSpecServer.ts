export const openApiSpecServer = `
openapi: 3.0.1
info:
  title: langfuse
  version: ''
paths:
  /api/public/events:
    post:
      description: Add an event to the database
      operationId: event_create
      tags:
        - Event
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
      security: &ref_0
        - BasicAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateEventRequest'
  /api/public/generations:
    post:
      operationId: generations_log
      tags:
        - Generations
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Log'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateLog'
  /api/public/scores:
    post:
      description: Add a score to the database
      operationId: score_create
      tags:
        - Score
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Score'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateScoreRequest'
  /api/public/spans:
    post:
      description: Add a span to the database
      operationId: span_create
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateSpanRequest'
    patch:
      description: Update a span to the database
      operationId: span_update
      tags:
        - Span
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Span'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateSpanRequest'
  /api/public/traces:
    post:
      description: Add a trace to the database
      operationId: trace_create
      tags:
        - Trace
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Trace'
      security: *ref_0
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateTraceRequest'
components:
  schemas:
    CreateEventRequest:
      title: CreateEventRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        metadata: {}
        input: {}
        output: {}
        parentObservationId:
          type: string
          nullable: true
      required:
        - traceId
        - name
        - startTime
        - metadata
        - input
        - output
    Event:
      title: Event
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        type:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        metadata: {}
        input: {}
        output: {}
        parentObservationId:
          type: string
          nullable: true
      required:
        - id
        - traceId
        - type
        - name
        - startTime
        - metadata
        - input
        - output
    CreateLog:
      title: CreateLog
      type: object
      properties:
        traceId:
          type: string
          nullable: true
        startTime:
          type: string
          format: date-time
          nullable: true
        endTime:
          type: string
          format: date-time
          nullable: true
        name:
          type: string
          nullable: true
        model:
          type: string
          nullable: true
        modelParameters:
          type: object
          additionalProperties:
            $ref: '#/components/schemas/MapValue'
          nullable: true
        prompt:
          nullable: true
        metadata:
          nullable: true
        completion:
          type: string
          nullable: true
        usage:
          $ref: '#/components/schemas/LLMUsage'
          nullable: true
        parentObservationId:
          type: string
          nullable: true
    Log:
      title: Log
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        type:
          type: string
        name:
          type: string
          nullable: true
        startTime:
          type: string
          format: date-time
          nullable: true
        endTime:
          type: string
          format: date-time
          nullable: true
        attributes: {}
        parentObservationId:
          type: string
          nullable: true
      required:
        - id
        - traceId
        - type
        - attributes
    LLMUsage:
      title: LLMUsage
      type: object
      properties:
        promptTokens:
          type: integer
          nullable: true
        completionTokens:
          type: integer
          nullable: true
    MapValue:
      title: MapValue
      oneOf:
        - type: string
          nullable: true
        - type: integer
          nullable: true
        - type: boolean
          nullable: true
    CreateScoreRequest:
      title: CreateScoreRequest
      type: object
      properties:
        traceId:
          type: string
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
          nullable: true
      required:
        - traceId
        - name
        - value
    Score:
      title: Score
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
          nullable: true
        timestamp:
          type: string
          format: date-time
      required:
        - id
        - name
        - value
        - timestamp
    CreateSpanRequest:
      title: CreateSpanRequest
      type: object
      properties:
        traceId:
          type: string
          nullable: true
        name:
          type: string
        startTime:
          type: string
          format: date-time
        endTime:
          type: string
          format: date-time
          nullable: true
        metadata: {}
        input: {}
        output: {}
        parentObservationId:
          type: string
          nullable: true
      required:
        - name
        - startTime
        - metadata
        - input
        - output
    UpdateSpanRequest:
      title: UpdateSpanRequest
      type: object
      properties:
        spanId:
          type: string
        endTime:
          type: string
          format: date-time
      required:
        - spanId
        - endTime
    Span:
      title: Span
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        type:
          type: string
        name:
          type: string
        startTime:
          type: string
          format: date-time
        endTime:
          type: string
          format: date-time
          nullable: true
        metadata: {}
        input: {}
        output: {}
        parentObservationId:
          type: string
          nullable: true
      required:
        - id
        - traceId
        - type
        - name
        - startTime
        - metadata
        - input
        - output
    CreateTraceRequest:
      title: CreateTraceRequest
      type: object
      properties:
        name:
          type: string
        metadata: {}
      required:
        - name
        - metadata
    Trace:
      title: Trace
      type: object
      properties:
        id:
          type: string
        timestamp:
          type: string
          format: date-time
        name:
          type: string
        metadata: {}
      required:
        - id
        - timestamp
        - name
        - metadata
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`;