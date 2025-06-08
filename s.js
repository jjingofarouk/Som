const fs = require('fs');
const path = require('path');

// Define the project structure
const projectStructure = {
  'soma': {
    'backend': {
      'soma': [
        '__init__.py',
        'asgi.py',
        'settings.py',
        'urls.py',
        'wsgi.py',
        'middleware.py'
      ],
      'users': [
        '__init__.py',
        'admin.py',
        'apps.py',
        'models.py',
        'serializers.py',
        'views.py',
        'urls.py',
        'permissions.py'
      ],
      'courses': [
        '__init__.py',
        'admin.py',
        'apps.py',
        'models.py',
        'serializers.py',
        'views.py',
        'urls.py',
        'permissions.py'
      ],
      'lessons': [
        '__init__.py',
        'admin.py',
        'apps.py',
        'models.py',
        'serializers.py',
        'views.py',
        'urls.py',
        'permissions.py'
      ],
      'comments': [
        '__init__.py',
        'admin.py',
        'apps.py',
        'models.py',
        'serializers.py',
        'views.py',
        'urls.py',
        'permissions.py'
      ],
      'scripts': ['seed.py'],
      'media': {
        'course_images': [],
        'lesson_content': []
      },
      'static': [],
      'manage.py': null,
      '.env': null,
      'requirements.txt': null,
      'Dockerfile': null,
      'docker-compose.yml': null
    },
    'frontend': {
      'app': {
        'layout.tsx': null,
        'page.tsx': null,
        'about': ['page.tsx'],
        'contact': ['page.tsx'],
        'courses': [
          'page.tsx',
          '[id]/page.tsx',
          'create/page.tsx',
          '[id]/edit/page.tsx',
          '[id]/lessons/[lessonId]/page.tsx'
        ],
        'dashboard': [
          'page.tsx',
          'learner/page.tsx',
          'instructor/page.tsx',
          'admin/page.tsx'
        ],
        'auth': [
          'login/page.tsx',
          'register/page.tsx',
          'reset-password/page.tsx'
        ],
        'profile': [
          '[id]/page.tsx',
          'edit/page.tsx'
        ]
      },
      'components': {
        'common': [
          'Header.tsx',
          'Footer.tsx',
          'ThemeToggle.tsx',
          'LoadingSpinner.tsx',
          'ErrorBoundary.tsx'
        ],
        'courses': [
          'CourseCard.tsx',
          'CourseForm.tsx',
          'CourseList.tsx'
        ],
        'lessons': [
          'LessonViewer.tsx',
          'LessonForm.tsx',
          'LessonList.tsx'
        ],
        'comments': [
          'CommentSection.tsx',
          'CommentForm.tsx'
        ],
        'auth': [
          'LoginForm.tsx',
          'RegisterForm.tsx',
          'ResetPasswordForm.tsx'
        ]
      },
      'lib': {
        'api.ts': null,
        'auth.ts': null,
        'types.ts': null,
        'hooks': [
          'useAuth.ts',
          'useCourses.ts',
          'useLessons.ts',
          'useComments.ts'
        ]
      },
      'public': [
        'favicon.ico',
        'logo.png',
        'placeholder-course.jpg'
      ],
      'styles': [
        'globals.css',
        'tailwind.css'
      ],
      'tailwind.config.ts': null,
      'next.config.mjs': null,
      'package.json': null,
      'tsconfig.json': null,
      '.eslintrc.json': null,
      '.prettierrc': null
    },
    'README.md': null,
    'CONTRIBUTING.md': null,
    'LICENSE': null,
    '.gitignore': null,
    'docker-compose.dev.yml': null
  }
};

// Function to create directories and files
function createStructure(basePath, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const currentPath = path.join(basePath, key);

    if (Array.isArray(value)) {
      // Create directory
      fs.mkdirSync(currentPath, { recursive: true });
      // Create files in the directory
      value.forEach(file => {
        const filePath = path.join(currentPath, file);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, '');
      });
    } else if (value === null) {
      // Create single file
      fs.writeFileSync(currentPath, '');
    } else {
      // Create directory and recurse
      fs.mkdirSync(currentPath, { recursive: true });
      createStructure(currentPath, value);
    }
  });
}

// Create the project structure
try {
  createStructure(process.cwd(), projectStructure);
  console.log('Project structure created successfully!');
} catch (error) {
  console.error('Error creating project structure:', error);
}
