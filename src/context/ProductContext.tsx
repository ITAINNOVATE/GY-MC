/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, PLATFORM_ID } from '../lib/supabase';
import type { Product } from './CartContext';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
      if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co') {
        throw new Error('Configuration Supabase manquante (Vérifiez les variables d\'environnement).');
      }

      if (!PLATFORM_ID) {
        throw new Error('PLATFORM_ID manquant. Vérifiez votre fichier .env.');
      }

      const fetchPromise = supabase
        .from('products')
        .select('*')
        .eq('platform_id', PLATFORM_ID)
        .order('created_at', { ascending: false });

      // Timeout de 10 secondes
      const timeoutPromise = new Promise<any>((_, reject) => 
        setTimeout(() => reject(new Error('Délai d\'attente dépassé pour la récupération des produits')), 10000)
      );

      const { data, error: supabaseError } = await Promise.race([fetchPromise, timeoutPromise]);

      if (supabaseError) throw supabaseError;

      // Log temporaire pour vérifier les données
      console.log(`[GY Maison Couture] ${(data || []).length} produits récupérés depuis ITA-CORE (platform_id: ${PLATFORM_ID})`);

      const mappedProducts: Product[] = (data || []).map((p: any) => ({
        id: p.id,
        name: p.name,
        price: Number(p.price),
        description: p.description || '',
        image: p.image_url || '',
        category: p.category || 'Haute Couture',
        collection: p.collection || 'Collection'
      }));

      setProducts(mappedProducts);

      if (mappedProducts.length === 0) {
        console.warn('[GY Maison Couture] Aucun produit trouvé pour cette plateforme.');
      }
    } catch (err: any) {
      console.error('[GY Maison Couture] Erreur chargement produits:', err);
      setError(err.message || 'Impossible de charger les produits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, refreshProducts: fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
