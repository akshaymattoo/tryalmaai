// pages/api/leads.ts
import { NextApiRequest, NextApiResponse } from "next";

export type LeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  linkedin_url: string;
  visas_of_interest: string;
  how_can_we_help_you: string;
  submission_date: string;
  status: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // Handle GET request
        const leads = [
          {
            first_name: "Lead",
            last_name: "One",
            email: "lead1@example.com",
            linkedin_url: "https://linkedin.com/in/leadone",
            visas_of_interest: "Visa 1",
            how_can_we_help_you: "Help 1",
            submission_date: "07/19/2024 2:45PM",
            status: "pending",
          },
          {
            first_name: "Lead",
            last_name: "Two",
            email: "lead2@example.com",
            linkedin_url: "https://linkedin.com/in/leadtwo",
            visas_of_interest: "Visa 2",
            how_can_we_help_you: "Help 2",
            submission_date: "07/20/2024 2:45PM",
            status: "pending",
          },
        ];
        res.status(200).json({ success: true, data: leads });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
      break;

    case "POST":
      // Handle POST request
      try {
        const newLead: LeadPayload = req.body;
        // Here, you would typically add the new lead to your database
        res.status(201).json({ success: true, data: newLead });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
      break;

    default:
      // Handle any other HTTP method
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
