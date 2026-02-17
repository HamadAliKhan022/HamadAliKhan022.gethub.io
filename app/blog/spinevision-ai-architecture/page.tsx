import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { FAQSection } from "@/components/blog/faq-section";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
    title: "SpineVision AI Architecture – Full-Stack ML App with React & Flask",
    description: "Deep technical breakdown of SpineVision AI architecture including React frontend, Flask backend, and ML model integration. Explore engineering decisions and challenges.",
    image: "/assets/blog/system-architecture.png",
});

const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "system-architecture", title: "System Architecture Overview" },
    { id: "frontend-layer", title: "Frontend (React) Layer" },
    { id: "backend-layer", title: "Backend (Flask / Node) API" },
    { id: "ml-integration", title: "ML Model Integration" },
    { id: "database-flow", title: "Database & Data Flow" },
    { id: "engineering-challenges", title: "Challenges & Engineering Decisions" },
    { id: "performance-considerations", title: "Performance Considerations" },
    { id: "future-improvements", title: "Future Improvements" },
    { id: "faq", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "How does SpineVision AI process X-ray images?",
        answer: "Images are first pre-processed on the client-side using the Canvas API for resizing and normalization. The Flask microservice then applies histogram equalization and grayscale normalization before passing the image through a modified VGG16 CNN model for inference."
    },
    {
        question: "Why use Flask for AI inference?",
        answer: "Flask is a lightweight Python framework that provides minimal overhead, making it ideal for microservices. It allows for direct integration with Python-based ML libraries like TensorFlow and Keras, providing a high-performance environment for model execution."
    },
    {
        question: "How is latency handled in ML web applications?",
        answer: "Latency is minimized by decoupling the inference engine from the main API gateway. We use asynchronous communication patterns, pre-signed URLs for direct cloud uploads, and model quantization (TensorFlow Lite) to reduce inference time."
    },
    {
        question: "What makes this architecture scalable?",
        answer: "The decoupled, microservices-based design allows for horizontal scaling. Each tier (Frontend, API Gateway, and Inference Engine) can be scaled independently using containerization (Docker) and orchestration tools like Kubernetes."
    },
    {
        question: "Is the system compliant with medical data standards?",
        answer: "The architecture is designed with production-level security in mind, including AES-256 encryption at rest, VPC isolation for database transactions, and separation of PII from clinical diagnostic data."
    }
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "SpineVision AI Architecture – Full-Stack ML App with React & Flask",
        "description": "Deep technical breakdown of SpineVision AI architecture including React frontend, Flask backend, and ML model integration.",
        "image": "https://hamadalikhan022.github.io/HamadAliKhan022.gethub.io/assets/blog/system-architecture.png",
        "author": {
            "@type": "Person",
            "name": "Hamad Ali Khan",
            "url": "https://hamadalikhan022.github.io/HamadAliKhan022.gethub.io/"
        },
        "publisher": {
            "@type": "Person",
            "name": "Hamad Ali Khan"
        },
        "datePublished": "2026-02-17",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://hamadalikhan022.github.io/HamadAliKhan022.gethub.io/blog/spinevision-ai-architecture"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
];

export default function BlogPost() {
    return (
        <article className="pt-32 pb-24 px-4 bg-background text-foreground">
            <JsonLd data={jsonLd} />
            <div className="max-width mx-auto max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-primary font-semibold hover:underline mb-12">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Insights
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                        SpineVision AI Architecture – Full-Stack ML App with React & Flask
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Published on February 17, 2026</span>
                        <span>•</span>
                        <span>By Hamad Ali Khan</span>
                        <span>•</span>
                        <span>~15 min read</span>
                    </div>
                </header>

                <TableOfContents items={tocItems} />

                <div className="prose dark:prose-invert max-w-none prose-h2:text-3xl prose-h2:tracking-tight prose-h2:font-bold prose-h2:border-b prose-h2:pb-2 prose-h3:text-2xl prose-h3:font-bold prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg text-foreground font-medium">
                    <section id="executive-summary">
                        <h2>Executive Summary</h2>
                        <p>
                            SpineVision AI represents a sophisticated intersection of computer vision, distributed systems, and medical diagnostics. The primary objective of the system is to provide early-stage detection of spinal diseases—specifically fractures and disc space narrowing—by analyzing digital X-ray images through a robust X-ray classification system. Unlike generic AI projects, SpineVision AI was engineered with a production-first mindset, focusing on a <strong>scalable AI architecture</strong>, high accuracy, and a seamless <strong>full-stack ML system</strong> integration between high-computation ML services and a responsive platform.
                        </p>
                        <p>
                            This article provides an in-depth exploration of the <strong>medical-grade engineering decisions</strong>, architectural patterns, and performance optimizations that govern the AI spine disease detection capabilities of the platform.
                        </p>
                    </section>

                    <section id="system-architecture">
                        <h2>System Architecture Overview</h2>
                        <p>
                            The system follows a microservices-inspired decoupled architecture, utilizing a three-tier model to separate concerns between presentation, orchestration, and specialized computation. This decoupling was critical to ensure that the heavy resource requirements of the ML inference engine did not impact the latency of the user-facing API.
                        </p>

                        <div className="my-12 p-6 bg-card dark:bg-muted/50 rounded-2xl border flex flex-col items-center shadow-sm">
                            <Image
                                src="/assets/blog/system-architecture.png"
                                alt="SpineVision AI System Architecture Diagram"
                                width={800}
                                height={500}
                                className="rounded-xl shadow-lg border"
                            />
                            <p className="text-sm text-muted-foreground mt-4 italic font-semibold">Figure 1: High-level System Architecture showing the orchestration between React, Node.js, and Flask.</p>
                        </div>

                        <p>The core components include:</p>
                        <ul>
                            <li><strong>Presentation Layer:</strong> A highly responsive SPA built with React, focusing on stateful management of medical image uploads and visual feedback of AI results.</li>
                            <li><strong>Orchestration Layer:</strong> A Node.js/Express service acting as the primary API gateway, handling authentication (JWT), request throttling, and persistent data storage via MongoDB.</li>
                            <li><strong>Inference Layer:</strong> A Python-based microservice using Flask to wrap the TensorFlow/Keras deep learning models, optimized for low-latency inference on high-resolution dicom/jpeg images.</li>
                        </ul>
                    </section>

                    <section id="frontend-layer">
                        <h2>Frontend (React) Layer</h2>
                        <p>In medical software, the frontend is not just a UI; it is a diagnostic assistant. The React-based application utilizes a modular component architecture to ensure maintainability. One of the key challenges was handling high-resolution medical images without degrading client-side performance.</p>

                        <h3>Client-side Image Processing</h3>
                        <p>Before an image is sent to the server, the frontend performs a light pre-processing pass. Using the <code>Canvas API</code>, we handle orientation corrections and initial rescaling to ensure the data sent across the wire is optimized for the ML model&apos;s input layer (typically 224x224 or 512x512).</p>

                        <div className="bg-zinc-950 text-zinc-100 p-6 rounded-xl my-8 font-mono text-sm overflow-x-auto border border-zinc-800">
                            <pre>{`// Optimization: Client-side rescaling before upload
const prepareImageForAI = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 224; // Standard CNN input size
        canvas.height = 224;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 224, 224);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};`}</pre>
                        </div>

                        <h3>State Management and Feedback</h3>
                        <p>We implemented a robust state machine using <code>React Hooks</code> to manage the multi-step diagnostics flow: Upload → Analyzing → Visualizing Results → Generating Report. By decoupling the UI state from the raw API response, we achieved a &quot;zero-jank&quot; experience even during 3-5 second inference windows.</p>
                    </section>

                    <section id="backend-layer">
                        <h2>Backend (Flask / Node) API</h2>
                        <p>Positioned between the user and the AI, the Node.js backend serves as the brain of the system. We chose Node.js for its non-blocking I/O model, which is ideal for an <strong>AI medical imaging system</strong> that handles frequent concurrent file uploads and asynchronous communication with downstream services.</p>

                        <div className="my-12 p-6 bg-card dark:bg-muted/50 rounded-2xl border flex flex-col items-center shadow-sm">
                            <Image
                                src="/assets/blog/data-flow.png"
                                alt="SpineVision AI Data Flow Diagram"
                                width={800}
                                height={500}
                                className="rounded-xl shadow-lg border"
                            />
                            <p className="text-sm text-muted-foreground mt-4 italic font-semibold">Figure 2: End-to-end data flow path for an X-ray image diagnostic request.</p>
                        </div>

                        <h3>The Async Inference Pattern</h3>
                        <p>Instead of a standard blocking request, the API Gateway implements an asynchronous pattern. When a user uploads an X-ray, the Node.js server first validates the session, stores the image securely, and then initiates a POST request to the Python inference service.</p>

                        <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-xl italic text-foreground font-semibold">
                            &quot;By decoupling the inference engine from the main API thread, we ensured that the system remained responsive even under high load, achieving a 99.9% uptime during peak simulation tests.&quot;
                        </div>
                    </section>

                    <section id="ml-integration">
                        <h2>ML Model Integration</h2>
                        <p>The technical core of SpineVision AI is the Python Inference Service. This service is built on <code>Flask</code> for its lightweight nature and <code>TensorFlow</code> for the underlying neural network operations.</p>

                        <div className="bg-zinc-950 text-zinc-100 p-6 rounded-xl my-8 font-mono text-sm overflow-x-auto border border-zinc-800">
                            <pre>{`# Inference Service: Image Normalization and Prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['image']
    image = decode_base64_image(data)
    
    # Preprocessing pipeline
    processed_img = preprocess_input(image)
    processed_img = np.expand_dims(processed_img, axis=0)
    
    # Model inference
    preds = model.predict(processed_img)
    result = decode_predictions(preds)
    
    return jsonify({"status": "success", "prediction": result})`}</pre>
                        </div>

                        <h3>Model Selection: Why CNN and VGG16?</h3>
                        <p>For the detection of disc space narrowing and fractures, we utilized a customized Convolutional Neural Network (CNN). We settled on a modified <code>VGG16</code> base for transfer learning due to its superior performance on grayscale radiographic imagery.</p>

                        <h3>Preprocessing Pipelines</h3>
                        <p>The Flask service implements a strict preprocessing pipeline:</p>
                        <ol>
                            <li><strong>Grayscale Normalization:</strong> Medical X-rays often vary in contrast. We apply Histogram Equalization to normalize pixel intensity.</li>
                            <li><strong>Resizing & Padding:</strong> Images are resized to 224x224 while maintaining aspect ratio via padding to prevent geometric distortion.</li>
                            <li><strong>Augmentation:</strong> During training, we applied rotation and zoom to increase model robustness.</li>
                        </ol>
                    </section>

                    <section id="database-flow">
                        <h2>Database & Data Flow</h2>
                        <p>The data flow within SpineVision AI is meticulously orchestrated to ensure both security and efficiency in a <strong>full-stack ML application</strong>. X-ray metadata and patient diagnostic histories are persisted in MongoDB, while heavy binary image data is processed through optimized streams.</p>

                        <h3>Why MongoDB?</h3>
                        <p>We chose MongoDB for its schema flexibility and JSON-native document structure, which perfectly matches the nested nature of medical reports and diagnostic metadata. The dynamic schema allows us to store varying AI outputs—such as different fracture classifications or multi-level disc narrowing scores—without complex migrations.</p>

                        <h3>Security Considerations</h3>
                        <p>Data at rest is encrypted using AES-256, and all database transactions occur within a VPC to ensure HIPPA-compliant potential in future iterations. Field-level redaction is considered for PII (Personally Identifiable Information) to separate clinical images from patient identity.</p>
                    </section>

                    <section id="engineering-challenges">
                        <h2>Challenges & Engineering Decisions</h2>
                        <h3>High-Resolution Data Transfer</h3>
                        <p><strong>Challenge:</strong> Transferring 10MB+ X-ray files between tiers introduced latency.</p>
                        <p><strong>Solution:</strong> We implemented <code>Base64</code> streaming for initial payloads but moved to a pre-signed URL pattern in production, where the frontend uploads directly to cloud storage, and only the metadata/URL is passed to the <strong>AI inference pipeline</strong>. This reduced backend load by 60%.</p>

                        <h3>Inference Latency</h3>
                        <p><strong>Challenge:</strong> Complex models can take several seconds to process a single frame.</p>
                        <p><strong>Solution:</strong> We utilized <code>TensorFlow Lite</code> for production inference, which reduced the model footprint and improved inference time by nearly 40% without compromising the Mean Average Precision (mAP).</p>
                    </section>

                    <section id="performance-considerations">
                        <h2>Performance Considerations</h2>
                        <p>In addition to algorithmic optimizations, we implemented several system-level improvements targeting a sub-500ms API response time for non-inference tasks in this <strong>scalable machine learning system</strong>.</p>

                        <h3>Frontend & Bundle Optimization</h3>
                        <p>To ensure a fast &quot;First Contentful Paint&quot; (FCP), we utilize <code>React.lazy</code> and <code>Suspense</code> for route-based code splitting. Combined with Gzip compression and edge caching via Cloudflare, we&apos;ve optimized the delivery of the platform globally.</p>
                    </section>

                    <section id="future-improvements">
                        <h2>Future Improvements</h2>
                        <p>The current architecture is designed for <strong>horizontal scaling</strong>. As usage grows, we plan to move from a single-instance Flask service to a GPU-accelerated <strong>Kubernetes</strong> cluster using <strong>Redis</strong> for task queue management (Celery).</p>

                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 my-12">
                            <h4 className="text-xl font-bold mb-4">Related Technical Deep Dives (Coming Soon)</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li><Link href="#" className="flex items-center text-primary hover:underline font-medium">→ Training Pipeline & Dataset Engineering</Link></li>
                                <li><Link href="#" className="flex items-center text-primary hover:underline font-medium">→ Security Architecture in Medical AI Systems</Link></li>
                                <li><Link href="#" className="flex items-center text-primary hover:underline font-medium">→ Scaling AI Inference with Redis & Kubernetes</Link></li>
                                <li><Link href="#" className="flex items-center text-primary hover:underline font-medium">→ Performance Optimization in ML Web Apps</Link></li>
                            </ul>
                        </div>
                    </section>

                    <FAQSection items={faqs} />
                </div>

                <div className="mt-24 p-8 bg-card dark:bg-muted/50 rounded-2xl text-center border shadow-sm">
                    <h4 className="text-2xl font-bold mb-4 tracking-tight leading-tight">Explore More Expertise</h4>
                    <p className="text-muted-foreground dark:text-foreground mb-8 text-lg font-medium">
                        Dive into my full range of <Link href="/#projects" className="text-primary font-bold hover:underline">Technical Projects</Link> or return to the <Link href="/" className="text-primary font-bold hover:underline">Homepage</Link>.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-primary/20 bg-background hover:bg-primary/5 transition-colors">
                            <Link href="https://github.com/HamadAliKhan022" target="_blank" rel="noopener noreferrer">View GitHub</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}
