import * as pino from 'pino'
import { SerializableObject } from './type-utils.js'

export type Direction = "Received" | "Emitted"

export type Logger = {
    readonly outputFile: string,
    readonly logRef: pino.Logger<never, boolean>,
    log: (data: SerializableObject) => void,
    logEvent: (event: SerializableObject, direction: Direction) => void
}

export namespace Logger {
    export const make = (outputFile: string): Logger => {
        type Self = Logger

        const logRef = pino.pino({level: "info", timestamp: pino.stdTimeFunctions.epochTime}, pino.destination(outputFile))

        const log = (data: SerializableObject): void => {
            logRef.info(data)
        }

        const logEvent = (event: SerializableObject, direction: Direction): void => {
            logRef.info({event}, direction)
        }

        const logger: Self = {
            outputFile,
            logRef,
            log,
            logEvent
        }

        return logger
    }
}