/**
 * Plivo API client which can be used to access the Plivo APIs.
 * To set a proxy or timeout, pass in options.proxy (url) or options.timeout (number in ms)
 * You can also pass in additional parameters accepted by the node requests module.
 */
export class Client {
    constructor(authid: string, authToken: any, options?: any);
    calls: CallInterface;
    accounts: AccountInterface;
    subaccounts: SubaccountInterface;
    subAccounts: SubaccountInterface;
    applications: ApplicationInterface;
    conferences: ConferenceInterface;
    endpoints: EndpointInterface;
    messages: MessageInterface;
    lookup: LookupInterface;
    powerpacks: PowerpackInterface;
    numbers: NumberInterface;
    pricings: PricingInterface;
    recordings: RecordingInterface;
    callFeedback: CallFeedbackInterface;
    media: MediaInterface;
    toJSON(...args: any[]): any;
}
/**
 * Plivo API client which can be used to access the Plivo APIs.
 * To set a proxy or timeout, pass in options.proxy (url) or options.timeout (number in ms)
 * You can also pass in additional parameters accepted by the node requests module.
 */
export class PhloClient {
    constructor(authid: string, authToken: any, options: any);
    phlo: (phloid: string) => Phlo;
}
import { CallInterface } from "../resources/call.js";
import { AccountInterface } from "../resources/accounts.js";
import { SubaccountInterface } from "../resources/accounts.js";
import { ApplicationInterface } from "../resources/applications.js";
import { ConferenceInterface } from "../resources/conferences.js";
import { EndpointInterface } from "../resources/endpoints.js";
import { MessageInterface } from "../resources/messages.js";
import { LookupInterface } from "../resources/lookup.js";
import { PowerpackInterface } from "../resources/powerpacks.js";
import { NumberInterface } from "../resources/numbers.js";
import { PricingInterface } from "../resources/pricings.js";
import { RecordingInterface } from "../resources/recordings.js";
import { CallFeedbackInterface } from "../resources/callFeedback.js";
import { MediaInterface } from "../resources/media.js";
import { Phlo } from "../resources/phlo.js";
