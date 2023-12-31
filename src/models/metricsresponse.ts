/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MetricValue, MetricValue$ } from "./metricvalue";
import { z } from "zod";

/**
 * Construct a type with a set of properties K of type T
 */
export type MetricsResponse = {
    activeConnections?: Array<MetricValue> | undefined;
    cpu?: Array<MetricValue> | undefined;
    memory?: Array<MetricValue> | undefined;
    rateEgress?: Array<MetricValue> | undefined;
    totalEgress?: Array<MetricValue> | undefined;
};

/** @internal */
export namespace MetricsResponse$ {
    export type Inbound = {
        active_connections?: Array<MetricValue$.Inbound> | undefined;
        cpu?: Array<MetricValue$.Inbound> | undefined;
        memory?: Array<MetricValue$.Inbound> | undefined;
        rate_egress?: Array<MetricValue$.Inbound> | undefined;
        total_egress?: Array<MetricValue$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<MetricsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            active_connections: z.array(MetricValue$.inboundSchema).optional(),
            cpu: z.array(MetricValue$.inboundSchema).optional(),
            memory: z.array(MetricValue$.inboundSchema).optional(),
            rate_egress: z.array(MetricValue$.inboundSchema).optional(),
            total_egress: z.array(MetricValue$.inboundSchema).optional(),
        })
        .transform((v) => ({
            ...(v.active_connections === undefined
                ? null
                : { activeConnections: v.active_connections }),
            ...(v.cpu === undefined ? null : { cpu: v.cpu }),
            ...(v.memory === undefined ? null : { memory: v.memory }),
            ...(v.rate_egress === undefined ? null : { rateEgress: v.rate_egress }),
            ...(v.total_egress === undefined ? null : { totalEgress: v.total_egress }),
        }));

    export type Outbound = {
        active_connections?: Array<MetricValue$.Outbound> | undefined;
        cpu?: Array<MetricValue$.Outbound> | undefined;
        memory?: Array<MetricValue$.Outbound> | undefined;
        rate_egress?: Array<MetricValue$.Outbound> | undefined;
        total_egress?: Array<MetricValue$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MetricsResponse> = z
        .object({
            activeConnections: z.array(MetricValue$.outboundSchema).optional(),
            cpu: z.array(MetricValue$.outboundSchema).optional(),
            memory: z.array(MetricValue$.outboundSchema).optional(),
            rateEgress: z.array(MetricValue$.outboundSchema).optional(),
            totalEgress: z.array(MetricValue$.outboundSchema).optional(),
        })
        .transform((v) => ({
            ...(v.activeConnections === undefined
                ? null
                : { active_connections: v.activeConnections }),
            ...(v.cpu === undefined ? null : { cpu: v.cpu }),
            ...(v.memory === undefined ? null : { memory: v.memory }),
            ...(v.rateEgress === undefined ? null : { rate_egress: v.rateEgress }),
            ...(v.totalEgress === undefined ? null : { total_egress: v.totalEgress }),
        }));
}
