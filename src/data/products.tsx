import { Brain, Cpu, Waves, Building2, Heart, Car, ShoppingCart, FlaskRound as Flask, Factory, Gauge, Zap, Scale, BarChart, Building, Construction, Mountain, MapPin, Rocket, LayoutGrid, Aperture, Timer, BadgeCheck } from 'lucide-react';
import React from 'react';

export const products = [
  {
    id: 'neurostream',
    name: 'NeuroStream AI™',
    tagline: 'AI-Optimized Video Compression',
    description: 'Revolutionary neural compression technology that reduces video size by up to 100x while preserving critical information for AI analytics. Perfect for smart cities, autonomous vehicles, and video surveillance.',
    fullDescription: 'NeuroStream AI™ is a groundbreaking neural compression technology that revolutionizes how video data is transmitted, stored, and analyzed. By selectively preserving information most relevant to AI analytics, our solution reduces video size by up to 100x while maintaining exceptional analysis accuracy. This enables unprecedented scaling of video analytics applications across smart cities, autonomous vehicles, and video surveillance systems.',
    icon: <Brain size={40} />,
    gradient: 'linear-gradient(135deg, #0B3D91 0%, #4B0082 100%)',
    challenges: [
      'Traditional video compression fails to distinguish what matters to AI systems',
      'Growing video analytics needs drive massive bandwidth and storage requirements',
      'Edge AI deployments struggle with data bottlenecks',
      'Conventional compression damages features crucial for accurate AI analysis'
    ],
    solutions: [
      'Neural network-based compression focused on preserving AI-relevant features',
      'Up to 100x reduction in bandwidth and storage requirements',
      'Edge-optimized design that maximizes battery life and processing efficiency',
      'Specialized encodings for different AI analysis tasks (facial recognition, object detection, etc.)'
    ],
    benefits: [
      {
        title: 'Dramatic Cost Reduction',
        description: 'Save up to 95% on bandwidth and storage costs compared to traditional compression methods.',
        icon: <Gauge size={24} className="text-primary" />,
      },
      {
        title: 'Accelerated Processing',
        description: 'Process 10-50x more video streams with the same infrastructure, enabling massive scalability.',
        icon: <Zap size={24} className="text-primary" />,
      },
      {
        title: 'Edge Device Efficiency',
        description: 'Extend battery life and reduce hardware requirements for edge deployments.',
        icon: <Scale size={24} className="text-primary" />,
      },
      {
        title: 'Scalable Deployment',
        description: 'Seamlessly handle thousands of camera streams without infrastructure overhaul.',
        icon: <LayoutGrid size={24} className="text-primary" />,
      },
    ],
    applications: [
      {
        industry: 'Smart Cities',
        description: 'Enable comprehensive traffic monitoring, public safety, and urban planning analytics at city-wide scale.',
        icon: <Building2 size={36} />,
      },
      {
        industry: 'Autonomous Vehicles',
        description: 'Efficiently transmit critical visual data between vehicles and infrastructure while minimizing latency.',
        icon: <Car size={36} />,
      },
      {
        industry: 'Retail Analytics',
        description: 'Scale in-store customer behavior analysis and inventory monitoring across large retail operations.',
        icon: <ShoppingCart size={36} />,
      },
      {
        industry: 'Industrial Monitoring',
        description: 'Deploy comprehensive visual inspection systems across manufacturing facilities.',
        icon: <Factory size={36} />,
      },
      {
        industry: 'Content Moderation',
        description: 'Process massive video content volumes for efficient automated content moderation.',
        icon: <Aperture size={36} />,
      },
    ],
    specifications: {
      system: [
        'Compatible with standard H.264/265 pipelines',
        'Edge components: ARM/x86 with min. 1GB RAM',
        'Cloud components: Kubernetes/Docker compatible',
        'SDK available for Android, iOS, Linux, Windows',
      ],
      capabilities: [
        'Up to 100x compression ratio for analytics',
        'Task-specific optimization profiles',
        'Dynamic bit rate adaptation',
        '8-bit, 16-bit precision options',
        'Latency as low as 50ms (edge model)',
      ],
      integrations: [
        'REST API for cloud services',
        'RTSP/RTMP input stream support',
        'Kafka/MQTT for event streaming',
        'Compatible with leading VMS platforms',
        'Pre-trained models for common tasks',
      ],
    },
  },
  {
    id: 'skyvision',
    name: 'SkyVision 3D™',
    tagline: 'Real-Time 3D Reconstruction',
    description: 'Transform standard drone footage into accurate 3D models in real-time with our groundbreaking single-camera solution. Ideal for infrastructure inspection, emergency response, and construction monitoring.',
    fullDescription: 'SkyVision 3D™ transforms how aerial imaging creates value by generating detailed 3D models in real-time from standard drone cameras. Unlike traditional photogrammetry that requires post-processing, our AI-driven approach delivers instant 3D reconstruction during flight. This breakthrough enables immediate decision-making for infrastructure inspection, emergency response, construction monitoring, and many other applications.',
    icon: <Cpu size={40} />,
    gradient: 'linear-gradient(135deg, #4B0082 0%, #008080 100%)',
    challenges: [
      'Traditional 3D reconstruction requires hours/days of post-processing',
      'Complex multi-camera setups increase drone cost and reduce flight time',
      'Existing solutions require specialized expertise to operate',
      'Limited accuracy in challenging visual conditions'
    ],
    solutions: [
      'Real-time 3D reconstruction during flight from a single camera',
      'Neural depth estimation with unprecedented accuracy',
      'Automatic texture mapping and model refinement',
      'Works with standard commercial drones and cameras'
    ],
    benefits: [
      {
        title: 'Instant Insights',
        description: 'Make critical decisions during flight instead of waiting for post-processing.',
        icon: <Timer size={24} className="text-primary" />,
      },
      {
        title: 'Cost Efficiency',
        description: 'Use standard drone equipment without expensive LiDAR or multi-camera arrays.',
        icon: <Gauge size={24} className="text-primary" />,
      },
      {
        title: 'Simplified Workflow',
        description: 'Eliminate complex post-processing steps with our automated pipeline.',
        icon: <LayoutGrid size={24} className="text-primary" />,
      },
      {
        title: 'Enhanced Safety',
        description: 'Identify structural issues immediately without repeat flight missions.',
        icon: <BadgeCheck size={24} className="text-primary" />,
      },
    ],
    applications: [
      {
        industry: 'Infrastructure Inspection',
        description: 'Instantly identify structural issues in bridges, towers, and buildings during inspection flights.',
        icon: <Building size={36} />,
      },
      {
        industry: 'Emergency Response',
        description: 'Create instant 3D maps of disaster areas for improved coordination and planning.',
        icon: <Rocket size={36} />,
      },
      {
        industry: 'Construction Monitoring',
        description: 'Track construction progress against plans with accurate volumetric measurements.',
        icon: <Construction size={36} />,
      },
      {
        industry: 'Mining & Quarrying',
        description: 'Generate precise volume calculations and site surveys in a single flight.',
        icon: <Mountain size={36} />,
      },
      {
        industry: 'Environmental Mapping',
        description: 'Create detailed terrain models for environmental monitoring and land management.',
        icon: <MapPin size={36} />,
      },
    ],
    specifications: {
      system: [
        'Compatible with all major drone platforms',
        'On-device processing: NVIDIA Jetson or equivalent',
        'Cloud processing option for extended operations',
        'Streaming output via standard protocols',
        'Mesh exports in OBJ, STL, and glTF formats',
      ],
      capabilities: [
        'Depth accuracy: ±2cm at 50m distance',
        'Reconstruction rate: up to 30 frames per second',
        'Progressive detail refinement during flight',
        'Automatic texture mapping',
        'Works in challenging lighting conditions',
      ],
      integrations: [
        'DJI SDK integration',
        'BIM software compatibility',
        'GIS systems export',
        'Cloud storage integration',
        'Measurement and annotation tools',
      ],
    },
  },
  {
    id: 'spectracore',
    name: 'SpectraCore AI™',
    tagline: 'Intelligent Signal Analysis',
    description: 'Our AI-powered solution revolutionizes analytical instrument data processing with automated baseline correction, enhanced peak detection, and intelligent noise reduction.',
    fullDescription: 'SpectraCore AI™ transforms analytical instrument data processing through advanced AI algorithms that automate baseline correction, enhance peak detection, and intelligently reduce noise. This powerful solution dramatically improves the accuracy and efficiency of spectral analysis across pharmaceutical research, environmental monitoring, and material science applications.',
    icon: <Waves size={40} />,
    gradient: 'linear-gradient(135deg, #008080 0%, #0B3D91 100%)',
    challenges: [
      'Manual baseline correction consumes valuable researcher time',
      'Traditional peak detection algorithms miss critical features',
      'Overlapping peaks create ambiguity in identification',
      'Noise reduction methods often discard meaningful signals'
    ],
    solutions: [
      'Automated baseline correction using adaptive algorithms',
      'Neural network-based peak detection with unprecedented sensitivity',
      'Advanced deconvolution of overlapping peaks',
      'Selective noise reduction that preserves signal integrity'
    ],
    benefits: [
      {
        title: 'Save Time',
        description: 'Reduce manual processing time by up to 75% with automated data enhancement.',
        icon: <Timer size={24} className="text-primary" />,
      },
      {
        title: 'Ensure Consistency',
        description: 'Eliminate variation between analysts with standardized processing algorithms.',
        icon: <BadgeCheck size={24} className="text-primary" />,
      },
      {
        title: 'Enhance Confidence',
        description: 'Detect previously missed features and reduce false positives in complex data.',
        icon: <BarChart size={24} className="text-primary" />,
      },
      {
        title: 'Accelerate Discovery',
        description: 'Focus on interpretation rather than data processing for faster insights.',
        icon: <Rocket size={24} className="text-primary" />,
      },
    ],
    applications: [
      {
        industry: 'Pharmaceutical R&D',
        description: 'Accelerate drug discovery with more accurate compound identification and characterization.',
        icon: <Flask size={36} />,
      },
      {
        industry: 'Environmental Monitoring',
        description: 'Improve detection of trace contaminants in complex environmental samples.',
        icon: <MapPin size={36} />,
      },
      {
        industry: 'Materials Science',
        description: 'Enhance characterization of advanced materials with superior signal analysis.',
        icon: <Cpu size={36} />,
      },
      {
        industry: 'Food & Beverage Analysis',
        description: 'Ensure product quality and safety with more sensitive contaminant detection.',
        icon: <ShoppingCart size={36} />,
      },
      {
        industry: 'Clinical Diagnostics',
        description: 'Improve sensitivity and specificity of diagnostic tests through enhanced signal processing.',
        icon: <Heart size={36} />,
      },
    ],
    specifications: {
      system: [
        'Standalone software for Windows/Linux',
        'Cloud-based SaaS platform option',
        'API integration with instrument software',
        'Batch processing capabilities',
        'Real-time analysis options',
      ],
      capabilities: [
        'Compatible with all major spectral formats',
        'Processes NMR, MS, IR, Raman, UV-Vis data',
        'Multi-dimensional data support',
        'Customizable processing workflows',
        'Machine learning model adaptation',
      ],
      integrations: [
        'LIMS system compatibility',
        'ELN integration options',
        'Cloud storage synchronization',
        'Export to standard analytical formats',
        'Third-party visualization tools',
      ],
    },
  },
];