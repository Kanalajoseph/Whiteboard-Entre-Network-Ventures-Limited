import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, DollarSign, FileText, Shield } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FormInput from '../../components/ui/FormInput';
import FormTextarea from '../../components/ui/FormTextarea';
import toast from 'react-hot-toast';

export default function Loans() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [applicationReference, setApplicationReference] = useState('');
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        email: '',
        phone: '',
        nationalId: '',
        dateOfBirth: '',
        address: '',

        // Loan Details
        loanAmount: '',
        loanType: 'Personal',
        loanPurpose: '',
        repaymentPeriod: '12',

        // Collateral Information
        collateralType: '',
        collateralValue: '',
        collateralDescription: '',

        // Employment
        employmentStatus: 'Employed',
        employerName: '',
        monthlyIncome: '',
        yearsEmployed: '',
    });

    const steps = [
        { number: 1, title: 'Personal Info', icon: FileText },
        { number: 2, title: 'Loan Details', icon: DollarSign },
        { number: 3, title: 'Collateral', icon: Shield },
    ];

    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validateStep = (step) => {
        switch (step) {
            case 1:
                return formData.fullName && formData.email && formData.phone && formData.nationalId && formData.dateOfBirth && formData.address;
            case 2:
                return formData.loanAmount && formData.loanType && formData.loanPurpose && formData.repaymentPeriod;
            case 3:
                return formData.collateralType && formData.collateralValue && formData.employmentStatus && formData.monthlyIncome;
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        } else {
            toast.error('Please fill in all required fields');
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep(3)) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        const reference = 'WEN-LOAN-' + Math.random().toString(36).substring(2, 10).toUpperCase();
        setApplicationReference(reference);

        console.log('Loan application submitted:', { ...formData, reference });
        toast.success('Application submitted successfully!');
        setIsSubmitting(false);
        setCurrentStep(4); // Move to confirmation step
    };

    const resetForm = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            nationalId: '',
            dateOfBirth: '',
            address: '',
            loanAmount: '',
            loanType: 'Personal',
            loanPurpose: '',
            repaymentPeriod: '12',
            collateralType: '',
            collateralValue: '',
            collateralDescription: '',
            employmentStatus: 'Employed',
            employerName: '',
            monthlyIncome: '',
            yearsEmployed: '',
        });
        setCurrentStep(1);
        setApplicationReference('');
    };

    if (currentStep === 4 && applicationReference) {
        // Confirmation Screen
        return (
            <PageTransition>
                <section className="section min-h-screen flex items-center justify-center bg-transparent">
                    <div className="container-custom">
                        <ScrollReveal>
                            <Card variant="glassDark" className="max-w-2xl mx-auto text-center border border-white/5">
                                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-12 h-12 text-green-400" />
                                </div>

                                <h1 className="text-3xl font-bold text-white mb-4">
                                    Application Submitted Successfully!
                                </h1>

                                <p className="text-lg text-slate-300 mb-6">
                                    Thank you for applying for a loan with WEN. Your application has been received and is under review.
                                </p>

                                <div className="bg-accent-500/10 border border-accent-500/20 rounded-xl p-6 mb-6">
                                    <p className="text-sm text-slate-400 mb-2">Your Application Reference Number:</p>
                                    <p className="text-2xl font-bold text-accent-400">{applicationReference}</p>
                                    <p className="text-sm text-slate-400 mt-2">
                                        Please save this number for tracking your application
                                    </p>
                                </div>

                                <div className="text-left bg-slate-800/50 border border-white/5 rounded-xl p-6 mb-6">
                                    <h3 className="font-semibold text-white mb-3">What Happens Next?</h3>
                                    <ol className="space-y-2 text-slate-400">
                                        <li className="flex gap-2">
                                            <span className="font-semibold text-accent-400">1.</span>
                                            <span>We will review your application within 2-3 business days</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-semibold text-accent-400">2.</span>
                                            <span>Our team will contact you for verification and additional documents</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-semibold text-accent-400">3.</span>
                                            <span>Upon approval, we will discuss terms and finalize the loan agreement</span>
                                        </li>
                                    </ol>
                                </div>

                                <div className="flex gap-4 justify-center">
                                    <Button onClick={resetForm} variant="outline">
                                        Submit Another Application
                                    </Button>
                                    <Button onClick={() => window.location.href = '/'} variant="mixed">
                                        Return to Home
                                    </Button>
                                </div>
                            </Card>
                        </ScrollReveal>
                    </div>
                </section>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                Loan <span className="text-accent-500">Application</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                Apply for a collateral-based loan and get financing for your personal or business needs.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Application Form */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Progress Steps */}
                        <ScrollReveal>
                            <div className="mb-12">
                                <div className="flex justify-between items-center relative">
                                    {/* Progress Line */}
                                    <div className="absolute top-5 left-0 right-0 h-1 bg-slate-800 -z-10">
                                        <div
                                            className="h-full bg-accent-600 transition-all duration-500 shadow-lg shadow-accent-600/20"
                                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                        />
                                    </div>

                                    {steps.map((step) => {
                                        const Icon = step.icon;
                                        const isActive = currentStep === step.number;
                                        const isCompleted = currentStep > step.number;

                                        return (
                                            <div key={step.number} className="flex flex-col items-center">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${isCompleted
                                                    ? 'bg-accent-600 text-white'
                                                    : isActive
                                                        ? 'bg-slate-800 border-4 border-accent-500 text-white'
                                                        : 'bg-slate-800 border-2 border-slate-700 text-slate-500'
                                                    }`}>
                                                    {isCompleted ? (
                                                        <Check className="w-6 h-6" />
                                                    ) : (
                                                        <Icon className="w-6 h-6" />
                                                    )}
                                                </div>
                                                <p className={`text-sm font-medium ${isActive || isCompleted ? 'text-accent-400' : 'text-slate-500'
                                                    }`}>
                                                    {step.title}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Form Steps */}
                        <ScrollReveal>
                            <Card variant="glassDark" className="border border-white/5">
                                <form onSubmit={handleSubmit}>
                                    {/* Step 1: Personal Information */}
                                    {currentStep === 1 && (
                                        <div className="space-y-6">
                                            <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <FormInput
                                                    name="fullName"
                                                    label="Full Name"
                                                    placeholder="John Doe"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                                <FormInput
                                                    name="nationalId"
                                                    label="National ID / Passport"
                                                    placeholder="123456/78/9"
                                                    value={formData.nationalId}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <FormInput
                                                    name="email"
                                                    type="email"
                                                    label="Email Address"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                                <FormInput
                                                    name="phone"
                                                    type="tel"
                                                    label="Phone Number"
                                                    placeholder="+260 977 123 456"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <FormInput
                                                name="dateOfBirth"
                                                type="date"
                                                label="Date of Birth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                required
                                            />

                                            <FormTextarea
                                                name="address"
                                                label="Residential Address"
                                                placeholder="Plot 123, Kabulonga, Lusaka"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                rows={3}
                                                required
                                            />
                                        </div>
                                    )}

                                    {/* Step 2: Loan Details */}
                                    {currentStep === 2 && (
                                        <div className="space-y-6">
                                            <h2 className="text-2xl font-bold text-white mb-6">Loan Details</h2>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <FormInput
                                                    name="loanAmount"
                                                    type="number"
                                                    label="Loan Amount (ZMW)"
                                                    placeholder="50000"
                                                    value={formData.loanAmount}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Loan Type
                                                    </label>
                                                    <select
                                                        name="loanType"
                                                        value={formData.loanType}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                        required
                                                    >
                                                        <option value="Personal">Personal Loan</option>
                                                        <option value="Business">Business Loan</option>
                                                        <option value="Car">Car Loan</option>
                                                        <option value="Property">Property Loan</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Repayment Period
                                                </label>
                                                <select
                                                    name="repaymentPeriod"
                                                    value={formData.repaymentPeriod}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                    required
                                                >
                                                    <option value="6">6 months</option>
                                                    <option value="12">12 months</option>
                                                    <option value="24">24 months</option>
                                                    <option value="36">36 months</option>
                                                    <option value="48">48 months</option>
                                                    <option value="60">60 months</option>
                                                </select>
                                            </div>

                                            <FormTextarea
                                                name="loanPurpose"
                                                label="Purpose of Loan"
                                                placeholder="Describe what you will use the loan for..."
                                                value={formData.loanPurpose}
                                                onChange={handleInputChange}
                                                rows={4}
                                                required
                                            />
                                        </div>
                                    )}

                                    {/* Step 3: Collateral & Employment */}
                                    {currentStep === 3 && (
                                        <div className="space-y-6">
                                            <h2 className="text-2xl font-bold text-white mb-6">Collateral & Employment Information</h2>

                                            <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4 mb-6">
                                                <p className="text-sm text-accent-300">
                                                    <strong>Note:</strong> All loans require collateral. The collateral value should be equal to or greater than the loan amount.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Collateral Type
                                                    </label>
                                                    <select
                                                        name="collateralType"
                                                        value={formData.collateralType}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                        required
                                                    >
                                                        <option value="">Select collateral type</option>
                                                        <option value="Property">Property/Land</option>
                                                        <option value="Vehicle">Vehicle</option>
                                                        <option value="Savings">Savings/Fixed Deposit</option>
                                                        <option value="Equipment">Equipment/Machinery</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>

                                                <FormInput
                                                    name="collateralValue"
                                                    type="number"
                                                    label="Estimated Collateral Value (ZMW)"
                                                    placeholder="60000"
                                                    value={formData.collateralValue}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <FormTextarea
                                                name="collateralDescription"
                                                label="Collateral Description"
                                                placeholder="Provide details about the collateral (e.g., property location, vehicle make/model, etc.)"
                                                value={formData.collateralDescription}
                                                onChange={handleInputChange}
                                                rows={3}
                                            />

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Employment Status
                                                    </label>
                                                    <select
                                                        name="employmentStatus"
                                                        value={formData.employmentStatus}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                        required
                                                    >
                                                        <option value="Employed">Employed</option>
                                                        <option value="Self-Employed">Self-Employed</option>
                                                        <option value="Business Owner">Business Owner</option>
                                                        <option value="Retired">Retired</option>
                                                    </select>
                                                </div>

                                                <FormInput
                                                    name="employerName"
                                                    label="Employer/Business Name"
                                                    placeholder="Company Name"
                                                    value={formData.employerName}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <FormInput
                                                    name="monthlyIncome"
                                                    type="number"
                                                    label="Monthly Income (ZMW)"
                                                    placeholder="10000"
                                                    value={formData.monthlyIncome}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                                <FormInput
                                                    name="yearsEmployed"
                                                    type="number"
                                                    label="Years in Employment/Business"
                                                    placeholder="5"
                                                    value={formData.yearsEmployed}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                                        {currentStep > 1 && (
                                            <Button
                                                type="button"
                                                onClick={prevStep}
                                                variant="outline"
                                            >
                                                <ArrowLeft className="w-5 h-5 mr-2" />
                                                Previous
                                            </Button>
                                        )}

                                        <div className={currentStep === 1 ? 'ml-auto' : ''}>
                                            {currentStep < 3 ? (
                                                <Button
                                                    type="button"
                                                    onClick={nextStep}
                                                    variant="mixed"
                                                >
                                                    Next
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Button>
                                            ) : (
                                                <Button
                                                    type="submit"
                                                    variant="mixed"
                                                    loading={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section bg-transparent border-t border-white/5 text-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-center">Loan Requirements</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card variant="glass-dark">
                                    <h3 className="font-bold mb-3">Required Documents</h3>
                                    <ul className="space-y-2 text-slate-300">
                                        <li>• National ID or Passport</li>
                                        <li>• Proof of Income (Payslip/Bank Statements)</li>
                                        <li>• Collateral Documents</li>
                                        <li>• Utility Bill (Proof of Residence)</li>
                                    </ul>
                                </Card>

                                <Card variant="glass-dark">
                                    <h3 className="font-bold mb-3">Eligibility Criteria</h3>
                                    <ul className="space-y-2 text-slate-300">
                                        <li>• 18 years or older</li>
                                        <li>• Zambian citizen or resident</li>
                                        <li>• Stable source of income</li>
                                        <li>• Valid collateral</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
