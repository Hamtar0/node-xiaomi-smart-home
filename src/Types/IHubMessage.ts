interface IHubMessage {
    cmd: string;
    model: string;
    sid: string;
    short_id: string;
    token: string;
    ip: string;
    data: any;
}

export default IHubMessage;
