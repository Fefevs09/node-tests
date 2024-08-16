import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

test("create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

  const appointment = new Appointment({
    customer: "Jonh Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Jonh Doe");
});

test("cannot create an appointmnet with end date before start date", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "Jonh Doe",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});

test("cannot create an appointmnet with start date before now", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = getFutureDate("2022-08-9");

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "Jonh Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
