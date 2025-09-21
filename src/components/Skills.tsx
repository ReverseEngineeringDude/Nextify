import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

interface SkillData {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
}

const RotatingSkill = ({ skill, position, index }: { skill: SkillData; position: [number, number, number]; index: number }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
    }
  });

  const skillColors = {
    frontend: '#00D4FF',
    backend: '#B084FF',
    database: '#00FFB3',
    tools: '#FF6B6B'
  };

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={skillColors[skill.category]}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          emissive={skillColors[skill.category]}
          emissiveIntensity={0.1}
        />
      </mesh>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {skill.name}
      </Text>
    </group>
  );
};

const Skills3D = ({ skills }: { skills: SkillData[] }) => {
  const positions: [number, number, number][] = [
    [0, 0, 0], [3, 1, -2], [-3, -1, 2], [2, -2, -1],
    [-2, 2, 1], [4, 0, -3], [-4, 0, 3], [1, 3, -2],
    [-1, -3, 2], [3, -1, 1], [-3, 1, -1], [0, -2, -3]
  ];

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#B084FF" />
      
      {skills.slice(0, 12).map((skill, index) => (
        <RotatingSkill
          key={skill.name}
          skill={skill}
          position={positions[index]}
          index={index}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const SkillBar = ({ skill, index }: { skill: SkillData; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-purple-500 to-pink-500',
    database: 'from-green-500 to-emerald-500',
    tools: 'from-orange-500 to-red-500'
  };

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills: SkillData[] = [
    { name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
    { name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6' },
    { name: 'Next.js', level: 85, category: 'frontend', color: '#000000' },
    { name: 'Vue.js', level: 80, category: 'frontend', color: '#4FC08D' },
    { name: 'Node.js', level: 90, category: 'backend', color: '#339933' },
    { name: 'Python', level: 85, category: 'backend', color: '#3776AB' },
    { name: 'Express', level: 88, category: 'backend', color: '#000000' },
    { name: 'GraphQL', level: 75, category: 'backend', color: '#E10098' },
    { name: 'PostgreSQL', level: 85, category: 'database', color: '#336791' },
    { name: 'MongoDB', level: 80, category: 'database', color: '#47A248' },
    { name: 'Redis', level: 75, category: 'database', color: '#DC382D' },
    { name: 'Docker', level: 85, category: 'tools', color: '#2496ED' },
    { name: 'AWS', level: 80, category: 'tools', color: '#FF9900' },
    { name: 'Git', level: 90, category: 'tools', color: '#F05032' },
    { name: 'Figma', level: 75, category: 'tools', color: '#F24E1E' },
  ];

  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const databaseSkills = skills.filter(s => s.category === 'database');
  const toolSkills = skills.filter(s => s.category === 'tools');

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            className="h-96 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Skills3D skills={skills} />
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend Development</h3>
                <div className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Backend Development</h3>
                <div className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + frontendSkills.length} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Database & Storage</h3>
                <div className="space-y-4">
                  {databaseSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + frontendSkills.length + backendSkills.length} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-4">Tools & DevOps</h3>
                <div className="space-y-4">
                  {toolSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + frontendSkills.length + backendSkills.length + databaseSkills.length} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;