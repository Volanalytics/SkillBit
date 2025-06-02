export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/SkillBit' : ''
}

export const withBasePath = (path: string) => {
  const basePath = getBasePath()
  // Remove any leading slashes from the path
  const cleanPath = path.replace(/^\/+/, '')
  // Combine base path with clean path
  return `${basePath}/${cleanPath}`.replace(/\/+$/, '')
}

// Example usage:
// withBasePath('/courses') -> '/SkillBit/courses' in production, '/courses' in development
// withBasePath('courses') -> '/SkillBit/courses' in production, '/courses' in development
// withBasePath('/') -> '/SkillBit' in production, '' in development
