import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import BreadcrumbWithHero from "@/components/BreadcrumbWithHero";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { comp_fone, comp_email } from "@/utils/constants";
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';

const api_url = `https://smtp.labonnesemence.ca/contact-us.php`
interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const Contact = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user types
		if (errors[name as keyof FormData]) {
			setErrors(prev => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<FormData> = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
		if (!formData.message.trim()) newErrors.message = 'Message is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();		
		if (!validateForm()) return;
		setIsLoading(true);
		try {
			await axios.post(api_url, formData);
			toast({
				title: 'Message sent!',
				description: 'We will get back to you soon.',
			});

		// Reset form
		setFormData({
			name: '',
			email: '',
			phone: '',
			message: '',
		});
		} catch (error) {
			console.error('Submission error:', error);
			toast({
				title: 'Error',
				description: 'Failed to send message. Please try again later.',
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Layout>
			<BreadcrumbWithHero title="Contact Us" breadcrumbs={[
				{ label: "Home", href: "/" },
				{ label: "Contact Us", href: "/contact" }
			]} />
			<section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h1 className="text-4xl lg:text-6xl font-bold leading-tight">
							Nous aimons entendre de vous.{" "}
							<span className="text-accent">Laissez-nous vous suivre.</span>
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Whether you are looking for support, have questions about our programs, want to partner with us, or are ready to get involved—we are here to help. Reach out to us using the information below or fill out the contact form, and a member of our team will get back to you as soon as possible.
						</p>
					</div>
				</div>
			</section>

			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl lg:text-3xl font-bold mb-6">Get in Touch</h2>
								<p className="text-muted-foreground mb-8">
									We aim to respond to all inquiries within 2 business days.
								</p>
							</div>

							<Card className="p-6">
								<CardHeader className="p-0 mb-4">
									<div className="flex items-center space-x-3 mb-2">
										<div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
										<	MapPin className="h-5 w-5 text-accent" />
										</div>
										<CardTitle className="text-lg">Office Location</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="p-0 space-y-2">
									<p className="font-medium">La Bonne Semence Francophone Society</p>
									<p className="text-muted-foreground">Edmonton, Alberta, Canada</p>
									<p className="text-muted-foreground">13407 97 St NW Edmonton, Alberta T5E 4C7</p>
								</CardContent>
							</Card>

							<Card className="p-6">
								<CardHeader className="p-0 mb-4">
									<CardTitle className="text-lg">Contact Information</CardTitle>
								</CardHeader>
								<CardContent className="p-0 space-y-4">
									<div className="flex items-center space-x-3">
										<Phone className="h-5 w-5 text-accent" />
										<div>
											<p className="font-medium">Phone</p>
											<p className="text-muted-foreground">{comp_fone}</p>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Mail className="h-5 w-5 text-accent" />
										<div>
											<p className="font-medium">Email</p>
											<p className="text-muted-foreground">{comp_email}</p>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="h-5 w-5 text-accent" />
										<div>
											<p className="font-medium">Office Hours</p>
											<p className="text-muted-foreground">Monday to Friday: 9:00 AM – 5:00 PM</p>
											<p className="text-muted-foreground">Closed on weekends and statutory holidays</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="p-6">
								<CardHeader className="p-0 mb-4">
									<CardTitle className="text-lg">Connect With Us</CardTitle>
									<CardDescription>
										Follow us on social media to stay informed about upcoming events, new programs, and opportunities to get involved.
									</CardDescription>
								</CardHeader>
								<CardContent className="p-0">
									<div className="flex space-x-2">
										<Button variant="outline" size="sm" className="p-2">
											<Facebook className="h-4 w-4" />
										</Button>
										<Button variant="outline" size="sm" className="p-2">
											<Instagram className="h-4 w-4" />
										</Button>
										<Button variant="outline" size="sm" className="p-2">
											<Linkedin className="h-4 w-4" />
										</Button>
										<Button variant="outline" size="sm" className="p-2">
											<Youtube className="h-4 w-4" />
										</Button>
									</div>
									<p className="text-sm text-muted-foreground mt-3">
										(Links to be added)
									</p>
								</CardContent>
							</Card>
						</div>

						<div>
							<Card className="p-8">
								<CardHeader className="p-0 mb-6">
									<CardTitle className="text-2xl">General Inquiries Form</CardTitle>
									<CardDescription>
										Send us a message and we'll get back to you as soon as possible.
									</CardDescription>
								</CardHeader>
								<CardContent className="p-0">
									<form className="space-y-6" onSubmit={handleSubmit}>
										<div className="space-y-2">
											<Label htmlFor="name">Your Name *</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="Enter your full name"
											/>
											{errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
										</div>

										<div className="space-y-2">
											<Label htmlFor="email">Your Email *</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												required
												placeholder="Enter your email address"
											/>
											{errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
										</div>

										<div className="space-y-2">
											<Label htmlFor="phone">Phone Number (optional)</Label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Enter your phone number"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="message">Message *</Label>
											<Textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												required
												rows={6}
												placeholder="Tell us how we can help you..."
											/>
											{errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
										</div>
										<Button type="submit" size="lg" className="w-full" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Message'}</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

		<section className="py-20 bg-muted/20">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl mx-auto text-center space-y-6">
					<h2 className="text-2xl lg:text-3xl font-bold">Visit Our Website</h2>
					<Card className="p-6">
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center space-x-2">
								<Mail className="h-5 w-5 text-accent" />
								<span className="font-medium">Website</span>
							</div>
							<p className="text-lg font-mono">www.labonnesemence.ca</p>
							<p className="text-sm text-muted-foreground">
								Visit our website for the latest updates, program information, and community resources.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
    </Layout>
  );
};

export default Contact;