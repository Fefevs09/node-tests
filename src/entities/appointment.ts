interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer(): string {
    return this.props.customer;
  }
  get startAt(): string {
    return this.props.customer;
  }
  get endsAt(): string {
    return this.props.customer;
  }

  constructor(props: AppointmentProps) {
    const { startsAt: startAt, endsAt } = props;

    if (startAt < new Date()) {
      throw new Error("Invalid start date");
    }

    if (endsAt <= startAt) {
      throw new Error("Invalid end date");
    }

    this.props = props;
  }
}
