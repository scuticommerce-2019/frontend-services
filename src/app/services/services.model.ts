export class ServicesModel {
  public serviceName: string;
  public serviceStatus: string;
  public serviceIp: string;
  public servicePort: string;

  constructor(serviceName: string, serviceStatus: string, serviceIp: string, servicePort: string) {
   this.serviceName = serviceName;
   this.serviceStatus = serviceStatus;
   this.serviceIp = serviceIp;
   this.servicePort = servicePort;

  }

}
