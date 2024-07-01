import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [form, setForm] = useState({
    date: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReports([...reports, form]);
    setForm({ date: "", location: "", description: "", image: null });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <Input
          placeholder="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <Input type="file" onChange={handleImageChange} />
        <Button type="submit">Submit Report</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report, index) => (
          <Card key={index}>
            {report.image && <img src={report.image} alt={report.location} className="h-48 w-full object-cover" />}
            <CardHeader>
              <CardTitle>{report.location}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{report.date}</p>
              <p>{report.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;